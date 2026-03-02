---
title: "Getting Started with Azure Functions"
date: "2025-11-15"
description: "My notes on triggers, bindings, and local development workflow while preparing for AZ-204."
tags: ["azure", "serverless", "az-204"]
---

## Introduction

Azure Functions is Microsoft's serverless compute offering. You write small, focused functions and Azure handles the infrastructure — scaling, patching, availability. During my AZ-204 prep I spent a lot of time getting comfortable with the trigger/binding model, so these are my consolidated notes.

## Triggers vs Bindings

A **trigger** is what causes a function to run. Every function has exactly one trigger. Common triggers:

- **HTTP trigger** — function runs on an HTTP request (GET, POST, etc.)
- **Timer trigger** — CRON-style schedule (e.g. every 5 minutes)
- **Queue trigger** — fires when a message lands in an Azure Storage Queue or Service Bus Queue
- **Blob trigger** — fires when a blob is created/modified in a container
- **Event Grid trigger** — reacts to Event Grid events

A **binding** is a declarative way to connect other resources to your function without writing plumbing code. Bindings can be *input* (read data) or *output* (write data).

```json
{
  "bindings": [
    {
      "type": "queueTrigger",
      "direction": "in",
      "name": "msg",
      "queueName": "my-queue",
      "connection": "AzureWebJobsStorage"
    },
    {
      "type": "blob",
      "direction": "out",
      "name": "outputBlob",
      "path": "output/{rand-guid}.txt",
      "connection": "AzureWebJobsStorage"
    }
  ]
}
```

The queue trigger fires the function, and the blob output binding automatically writes the result blob — no `BlobServiceClient` needed in your code.

## Local Development

Install the Azure Functions Core Tools and run locally with:

```bash
npm install -g azure-functions-core-tools@4 --unsafe-perm true
func new --template "HTTP trigger" --name MyFunction
func start
```

Your function is now available at `http://localhost:7071/api/MyFunction`. Hot reload works out of the box.

## Durable Functions

For orchestration patterns (fan-out/fan-in, async human approval, chaining), Durable Functions extends Azure Functions with stateful workflows. The three main entities are:

- **Orchestrator function** — coordinates the workflow, must be deterministic
- **Activity function** — does the actual work (I/O, computation)
- **Client function** — starts and queries orchestrations

## Key AZ-204 Takeaways

- Consumption plan: scales to zero, pay-per-execution, 5-minute default timeout (10 max)
- Premium plan: pre-warmed instances, VNet integration, no cold start
- Dedicated (App Service) plan: always-on, predictable cost
- `host.json` controls retry policies, concurrency limits, and extension versions
- Connection strings go in `local.settings.json` locally and App Settings in production — never hardcode them
