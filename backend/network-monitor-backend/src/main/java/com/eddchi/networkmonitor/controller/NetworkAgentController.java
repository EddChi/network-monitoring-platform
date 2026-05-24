package com.eddchi.networkmonitor.controller;

import com.eddchi.networkmonitor.model.NetworkAgent;
import com.eddchi.networkmonitor.service.NetworkAgentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agents")
@RequiredArgsConstructor
public class NetworkAgentController {

    private final NetworkAgentService networkAgentService;

    @GetMapping
    public List<NetworkAgent> getAllAgents() {
        return networkAgentService.getAllAgents();
    }

    @GetMapping("/status/{status}")
    public List<NetworkAgent> getAgentsByStatus(
            @PathVariable String status) {

        return networkAgentService.getAgentsByStatus(status);
    }

    @GetMapping("/{id}")
    public NetworkAgent getAgentById(@PathVariable Long id) {
        return networkAgentService.getAgentById(id);
    }

    @PostMapping
    public NetworkAgent createAgent(@RequestBody NetworkAgent networkAgent) {
        return networkAgentService.createAgent(networkAgent);
    }

    @DeleteMapping("/{id}")
    public void deleteAgent(@PathVariable Long id) {
        networkAgentService.deleteAgent(id);
    }

    @PutMapping("/{id}/heartbeat")
    public NetworkAgent updateHeartbeat(
            @PathVariable Long id) {

        return networkAgentService.updateHeartbeat(id);
    }
}