package com.eddchi.networkmonitor.controller;

import com.eddchi.networkmonitor.dto.ActivityFeedResponse;
import com.eddchi.networkmonitor.service.ActivityFeedService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/activity")
@RequiredArgsConstructor
public class ActivityFeedController {

    private final ActivityFeedService activityFeedService;

    @GetMapping("/recent")
    public List<ActivityFeedResponse> getRecentActivity() {
        return activityFeedService.getRecentActivity();
    }
}