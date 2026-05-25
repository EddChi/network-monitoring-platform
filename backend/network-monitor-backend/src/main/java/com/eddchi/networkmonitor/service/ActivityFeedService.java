package com.eddchi.networkmonitor.service;

import com.eddchi.networkmonitor.dto.ActivityFeedResponse;
import com.eddchi.networkmonitor.model.NetworkEvent;
import com.eddchi.networkmonitor.repository.NetworkEventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ActivityFeedService {

    private final NetworkEventRepository networkEventRepository;

    public List<ActivityFeedResponse> getRecentActivity() {
        return networkEventRepository.findTop10ByOrderByTimestampDesc()
                .stream()
                .map(this::convertToActivityFeed)
                .toList();
    }

    private ActivityFeedResponse convertToActivityFeed(NetworkEvent event) {
        return new ActivityFeedResponse(
                event.getEventType(),
                event.getDescription(),
                event.getNetworkAgent().getHostname(),
                event.getTimestamp()
        );
    }
}