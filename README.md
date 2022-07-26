# Appium Driver Template

Appium Driver Template is a template to create Appium 2.x drivers.

## Installation

Install `template-driver` aka `custom-driver` (if not installed)

```sh
appium driver install --source npm appium-driver-template
```

Run Appium server with custom or template driver

```sh
appium server -pa /wd/hub --use-drivers=<<driver-name>>
```
