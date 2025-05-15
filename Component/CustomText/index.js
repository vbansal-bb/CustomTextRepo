"use strict";

const Platform = require("react-native/Libraries/Utilities/Platform");
import { Text } from "react-native";
const srcFileAndroidText = "./js/v77/Text.android";
const TextAndroid = require(srcFileAndroidText);
module.exports = Platform.OS === "android" ? TextAndroid : Text;
