
# webos-helper

A helper tool for WebOS project management, simplifying tasks like installing the WebOS CLI, creating projects, pairing TVs, and building IPK files.

## Installation

To install `webos-helper` globally, use the following command:

```bash
npm install -g webos-helper
```

## Commands

### Install WebOS CLI

Checks for the required Node.js and npm versions, and installs the WebOS CLI if they are present.

```bash
webos-helper install-cli
```

### Create a New WebOS Project

Creates a new WebOS project with the specified project name.

```bash
webos-helper create-project <project-name>
```

### Pair TV

Pairs a TV with the specified device name and IP address.

```bash
webos-helper pair-tv <device-name> <ip-address>
```

### Build WebOS IPK File

Builds an IPK file for the specified WebOS project directory.

```bash
webos-helper build-ipk <project-dir>
```

## Examples

### Install WebOS CLI

```bash
webos-helper install-cli
```

### Create a New WebOS Project

```bash
webos-helper create-project MyWebOSApp
```

### Pair TV

```bash
webos-helper pair-tv MyTV 192.168.0.101
```

### Build WebOS IPK File

```bash
webos-helper build-ipk ./MyWebOSApp
```

## Development

### Prerequisites

Ensure you have Node.js (version > 14.15.1) and npm installed.

### Build the Project

To build the TypeScript project, run:

```bash
npm run build
```

### Run Locally

You can test the package locally using:

```bash
npm start <command>
```

For example:

```bash
npm start install-cli
npm start create-project TestProject
npm start pair-tv TestDevice 192.168.0.101
npm start build-ipk ./TestProject
```

### Test

To run tests, use:

```bash
npm test
```

## License

This project is licensed under the MIT License.
