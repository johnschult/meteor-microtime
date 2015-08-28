# microtime

**Note:** This is a repackage of [node-microtime](https://github.com/wadey/node-microtime)
for Meteor. This only runs in `Server` code as it depends on a `node` package.

## Summary

`Date.now()`` will only give you accuracy in milliseconds. This package calls
`gettimeofday(2)` to get the time in microseconds and provides it in a few
different formats. The same warning from that function applies:
_The resolution of the system clock is hardware dependent, and the time may
be updated continuously or in ``ticks.''_

## Installation

```
meteor add johnschult:microtime
```

## Usage (Server only)

### Microtime.now()

Get the current time in microseconds as an integer. Since JavaScript can only
represent integer values accurately up to `Math.pow(2, 53)`, this value will
be accurate up to _Tue, 05 Jun 2255 23:47:34 GMT_.

### Microtime.nowDouble()

Get the current time in seconds as a floating point number with microsecond
accuracy (similar to `time.time()` in Python and `Time.now.to_f` in Ruby).

### Microtime.nowStruct()

Get the current time and return as a list with seconds and microseconds
(matching the return value of `gettimeofday(2)`).
