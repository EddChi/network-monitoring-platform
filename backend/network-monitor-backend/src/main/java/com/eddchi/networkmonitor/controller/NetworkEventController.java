package com.eddchi.networkmonitor.controller;

import com.eddchi.networkmonitor.model.NetworkEvent;
import com.eddchi.networkmonitor.service.NetworkEventService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
@RequiredArgsConstructor
public class NetworkEventController {

    private final NetworkEventService networkEventService;

    @GetMapping
    public List<NetworkEvent> getAllEvents() {
        return networkEventService.getAllEvents();
    }

    @GetMapping("/agent/{agentId}")
    public List<NetworkEvent> getEventsByAgentId(@PathVariable Long agentId) {
        return networkEventService.getEventsByAgentId(agentId);
    }
}