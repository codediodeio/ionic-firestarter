import * as agg from './aggregation';
import * as notify from './notifications';

// Aggregation Functions
export const updateFollowerCount = agg.updateFollowerCounts;
export const updatePostCount     = agg.updatePostCount;

// Notification Functions

export const unicornNotifications = notify.newUnicornPost;