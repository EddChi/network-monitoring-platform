package com.eddchi.networkmonitor.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class ApiErrorResponse {

    private LocalDateTime timestamp;
    private int status;
    private String error;
    private String message;
}