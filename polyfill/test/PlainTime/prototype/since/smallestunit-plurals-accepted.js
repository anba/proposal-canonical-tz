// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.since
description: Plural units are accepted as well for the smallestUnit option
includes: [temporalHelpers.js]
---*/

const earlier = new Temporal.PlainTime(12, 34, 56, 987, 654, 321);
const later = new Temporal.PlainTime(13, 35, 57, 988, 655, 322);
const validUnits = [
  "hour",
  "minute",
  "second",
  "millisecond",
  "microsecond",
  "nanosecond",
];
TemporalHelpers.checkPluralUnitsAccepted((smallestUnit) => later.since(earlier, { smallestUnit }), validUnits);