"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agg = require("./aggregation");
const notify = require("./notifications");
// Aggregation Functions
exports.updateFollowerCount = agg.updateFollowerCounts;
exports.updatePostCount = agg.updatePostCount;
// Notification Functions
exports.unicornNotifications = notify.newUnicornPost;
//# sourceMappingURL=index.js.map