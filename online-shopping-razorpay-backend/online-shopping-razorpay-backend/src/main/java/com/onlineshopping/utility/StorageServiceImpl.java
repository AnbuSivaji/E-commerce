package com.onlineshopping.utility;

import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

@Component
public class StorageServiceImpl implements StorageService {

    private static final Logger logger = LoggerFactory.getLogger(StorageServiceImpl.class);

    @Value("${disk.upload.basepath}")
    private String BASEPATH;

    @Override
    public List<String> loadAll() {
        File dirPath = new File(BASEPATH);
        String[] files = dirPath.list();
        return files != null ? Arrays.asList(files) : List.of();
    }

    @Override
    public String store(MultipartFile file) {
        if (file == null || file.isEmpty()) {
            logger.warn("Attempted to store empty or null file.");
            return null;
        }

        String originalFilename = file.getOriginalFilename();
        if (originalFilename == null || !originalFilename.contains(".")) {
            logger.error("Invalid file name: {}", originalFilename);
            return null;
        }

        String ext = originalFilename.substring(originalFilename.lastIndexOf("."));
        String fileName = UUID.randomUUID().toString().replaceAll("-", "") + ext;

        Path path = Paths.get(BASEPATH);
        File directory = path.toFile();

        // Create directory if it doesn't exist
        if (!directory.exists()) {
            boolean created = directory.mkdirs();
            if (!created) {
                logger.error("Failed to create directory: {}", BASEPATH);
                return null;
            }
        }

        File filePath = new File(directory, fileName);

        try (FileOutputStream out = new FileOutputStream(filePath)) {
            FileCopyUtils.copy(file.getInputStream(), out);
            logger.info("File stored successfully: {}", fileName);
            return fileName;
        } catch (Exception e) {
            logger.error("Error storing file: {}", fileName, e);
        }
        return null;
    }

    @Override
    public Resource load(String fileName) {
        File filePath = new File(BASEPATH, fileName);
        if (filePath.exists()) {
            return new FileSystemResource(filePath);
        } else {
            logger.warn("File not found: {}", fileName);
        }
        return null;
    }

    @Override
    public void delete(String fileName) {
        File filePath = new File(BASEPATH, fileName);
        if (filePath.exists()) {
            boolean deleted = filePath.delete();
            if (deleted) {
                logger.info("File deleted successfully: {}", fileName);
            } else {
                logger.warn("Failed to delete file: {}", fileName);
            }
        } else {
            logger.warn("File to delete does not exist: {}", fileName);
        }
    }
}
