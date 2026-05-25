package com.eddchi.networkmonitor.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ApiErrorResponse handleResourceNotFound(
            ResourceNotFoundException ex) {

        return new ApiErrorResponse(
                LocalDateTime.now(),
                HttpStatus.NOT_FOUND.value(),
                "Not Found",
                ex.getMessage()
        );
    }
}