// ============================================================
//  Worship Metrics Dashboard — Data File
//  Christ Lincoln — Worship Ministries
//
//  This file is the ONLY file the refresh agent edits.
//  The HTML dashboard loads it via <script src> and renders from it.
//
//  Structure:
//    DASHBOARD_DATA.lastRefreshed  — date string for display
//    DASHBOARD_DATA.quarters       — ordered quarter labels
//    DASHBOARD_DATA.spaces         — per-space quarterly arrays
//    DASHBOARD_DATA.weeklyData     — keyed by quarter label
// ============================================================

const DASHBOARD_DATA = {

    lastRefreshed: '2026-04-15',

    // Ordered quarter labels — append new quarters here
    quarters: [
        'Q1 23-24', 'Q2 23-24', 'Q3 23-24', 'Q4 23-24',
        'Q1 24-25', 'Q2 24-25', 'Q3 24-25', 'Q4 24-25',
        'Q1 25-26', 'Q2 25-26', 'Q3 25-26', 'Q4 25-26'
    ],

    // Per-space quarterly data — arrays are indexed to match quarters[]
    spaces: {
        sanctuary: {
            weeklyAvg:       [586, 582, 657, 559, 602, 610, 621, 622, 590, 611, 663, null],
            service8am:      [194, 191, 248, 213, 207, 218, 222, 218, 203, 237, 221, null],
            service930am:    [219, 226, 237, 227, 238, 242, 231, 260, 249, 240, 283, null],
            service11am:     [142, 135, 138, 119, 130, 128, 146, 144, 138, 134, 159, null],
            firstTimeGuests: [88, 86, null, null, 118, 155, 152, 231, 109, 607, null, null],
            infantBaptisms:  [34, 30, 34, 25, 27, 22, 22, null, 4, 8, 5, null],
            childBaptisms:   [null, null, null, null, 0, 1, 0, 1, null, 1, 1, null],
            adultBaptisms:   [null, null, null, null, 7, 7, 4, 6, null, 0, 0, null],
            streamingHours:  [null, null, null, null, null, null, null, null, 778, 1141, 1255, 213]
        },
        sumner: {
            weeklyAvg:       [705, 718, 775, 640, 726, 722, 788, 742, 748, 747, 787, null],
            service930am:    [435, 426, 465, 405, 458, 453, 474, 449, 465, 453, 463, null],
            service11am:     [270, 292, 310, 235, 268, 269, 314, 293, 283, 294, 324, null],
            firstTimeGuests: [null, 155, null, null, 222, 365, 412, 269, 184, 485, null, null],
            infantBaptisms:  [null, null, null, null, 7, 10, 5, 3, 5, 5, 9, null],
            childBaptisms:   [null, null, null, null, 1, 2, 2, 1, 2, 3, 3, null],
            adultBaptisms:   [null, null, null, null, 0, 2, 0, 1, null, 0, 0, null],
            streamingHours:  [null, null, null, null, null, null, null, null, 890, 1284, 1482, 287]
        },
        yh: {
            weeklyAvg:       [491, 503, 566, 519, 514, 553, 569, 627, 633, 672, 603, null],
            service9am:      [249, 249, 270, 286, 273, 301, 285, 356, 320, 331, 292, null],
            service1030am:   [242, 254, 296, 233, 241, 252, 284, 271, 313, 341, 311, null],
            firstTimeGuests: [null, 4, null, null, 157, 369, 213, 258, 117, 589, null, null],
            infantBaptisms:  [null, null, null, null, 1, 4, 8, 5, 7, 9, 7, null],
            childBaptisms:   [null, null, null, null, 0, 3, 0, 4, null, 8, 2, null],
            adultBaptisms:   [null, null, null, null, 3, 1, 1, 1, null, 3, 0, null],
            streamingHours:  [null, null, null, null, null, null, null, null, 689, 737, 826, 125]
        }
    },

    // Weekly detail data — keyed by quarter label
    // Each quarter has attendance[] and streaming[] arrays
    // The refresh agent adds/replaces the current quarter's key
    weeklyData: {
        'Q3 25-26': {
            attendance: [
                { date: '2026-01-04', sanctuary: 711, sumner: 791, yh: 612 },
                { date: '2026-01-11', sanctuary: 689, sumner: 822, yh: 618 },
                { date: '2026-01-18', sanctuary: 599, sumner: 817, yh: 584 },
                { date: '2026-01-25', sanctuary: 719, sumner: 565, yh: 517 },
                { date: '2026-02-01', sanctuary: 605, sumner: 793, yh: 629 },
                { date: '2026-02-08', sanctuary: 658, sumner: 830, yh: 620 },
                { date: '2026-02-15', sanctuary: 629, sumner: 768, yh: 589 },
                { date: '2026-02-22', sanctuary: 649, sumner: 840, yh: 599 },
                { date: '2026-03-01', sanctuary: 642, sumner: 845, yh: 679 },
                { date: '2026-03-08', sanctuary: 576, sumner: 746, yh: 475 },
                { date: '2026-03-15', sanctuary: 659, sumner: 649, yh: 549 },
                { date: '2026-03-22', sanctuary: 639, sumner: 827, yh: 590 },
                { date: '2026-03-29', sanctuary: 840, sumner: 939, yh: 778 }
            ],
            streaming: [
                { date: '2026-01-04', sanctuary: 4633, sumner: 6900, yh: 4798 },
                { date: '2026-01-11', sanctuary: 5049, sumner: 6337, yh: 2864 },
                { date: '2026-01-18', sanctuary: 5938, sumner: 6074, yh: 3554 },
                { date: '2026-01-25', sanctuary: 8699, sumner: 7743, yh: 5191 },
                { date: '2026-02-01', sanctuary: 6363, sumner: 8094, yh: 4342 },
                { date: '2026-02-08', sanctuary: 4680, sumner: 1681, yh: 4029 },
                { date: '2026-02-15', sanctuary: 4773, sumner: 6630, yh: 2917 },
                { date: '2026-02-22', sanctuary: 6157, sumner: 7384, yh: 4315 },
                { date: '2026-03-01', sanctuary: 5581, sumner: 5492, yh: 3902 },
                { date: '2026-03-08', sanctuary: 4073, sumner: 4711, yh: 3361 },
                { date: '2026-03-15', sanctuary: 6456, sumner: 7911, yh: 3402 },
                { date: '2026-03-22', sanctuary: 4832, sumner: 12201, yh: 2647 },
                { date: '2026-03-29', sanctuary: 4031, sumner: 5866, yh: 2875 }
            ]
        },
        'Q4 25-26': {
            attendance: [
                { date: '2026-04-05', sanctuary: 1280, sumner: 1650, yh: 1298, note: 'Easter Sunday — Sanctuary includes 6am sunrise service (104)' },
                { date: '2026-04-12', sanctuary: 621, sumner: 700, yh: 610, note: 'First regular Sunday of Q4 — Sanctuary only 2 services (no 11am)' }
            ],
            streaming: [
                { date: '2026-04-02', label: 'Maundy Thursday', sanctuary: 1288, sumner: 1548, yh: 745 },
                { date: '2026-04-03', label: 'Good Friday', sanctuary: 1787, sumner: 3519, yh: 1603 },
                { date: '2026-04-05', label: 'Easter Sunday', sanctuary: 5899, sumner: 6856, yh: 3186 },
                { date: '2026-04-12', sanctuary: 3814, sumner: 5314, yh: 1979 }
            ]
        }
    }
};
