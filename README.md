# CustomTextRepo

![Build](https://github.com/vbansal-bb/CustomTextRepo/workflows/Pre%20Merge%20Checks/badge.svg)

This app demoes the use of CustomText Component which is forked from React Native Source Code version 77.
It works on old architecture but on new architecture it throws error.

# Reproducer TODO list

- [x] 1. Create a new reproducer project.
- [ ] 2. Git clone your repository locally.
- [ ] 3. Edit the project to reproduce the failure you're seeing.
- [ ] 4. Push your changes, so that Github Actions can run the CI.
- [ ] 5. Make sure the repository is public and share the link with the issue you reported.

# How to use this Reproducer

## Step 1: Install the dependencies 

```bash

# using Yarn

yarn 
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash

# using Yarn

yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash

# using Yarn
yarn android
```
on New Architecture : Above will run the app on android emulator on new architecture but on load app is throwing an error -Attempt to create a native View AndroidTextCustom failed.

On Old: when updating in gradle.properties `newArchEnabled=false` and rebuild then same app works fine with out any issue


```
