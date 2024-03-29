import { IWorkout } from "../../interfaces/ISport";
import barbellSquat from "../images/barbellSquats.jpg";
import rowDB1 from "../images/lawnmower1.jpg";
import plank from "../images/plank.jpg";
import militaryPressDB from "../images/millitaryPress.jpg";
import triPressDown from "../images/triPressDown.jpg";
import lunges from "../images/lunges.jpg";
import curlsBB from "../images/straightBarCurl.jpg";
import benchPressBB from "../images/benchPress.jpg";
import shrugsDB from "../images/shoulderShrugs.jpg";
import deadliftBB from "../images/barbellDeadLift.jpg";
import rearDeltFly from "../images/rearDeltFlyes.jpg";
import calfRaisesBW from "../images/calfRaise.jpeg";
import pullup from "../images/pullup1.jpg";

import pullover from "../images/pullover.png";
import situps from "../images/situps2.jpg";
import goodMornings from "../images/goodMornings.png";
import hammerCurls from "../images/hammerCurls.jpg";
import standingTricepExtension from "../images/standingTricepsExtension2.png";
import legRaisesSuspended from "../images/legRaiseSuspended.jpg";
import barbellRow from "../images/barbellRow.jpg";
import lateralRaise from "../images/lateralRaise.webp";
import curlsSup from "../images/curlsSup.png";
import dips from "../images/dips.jpg";
import legCurls from "../images/legCurls.png";

export const workoutSamples: IWorkout[] = [
  // worout 1
  {
    _id: "1",
    mainTitle: "Anabolic Pre-Phase",
    weekDuration: [3],
    imgUrl:
      "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    discriptionShort: "Build overall strength and muscle & prepare for Phase I",
    discriptionExtra:
      "Better coordination, increased strength, correction of muscle imbalances and improvement in exercise form.",
    exercises: [
      {
        title: "Barbell Squats",
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: barbellSquat,
      },
      {
        title: "Walking Lunges",
        sets: [1],
        reps: [16, 20],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: lunges,
      },
      {
        title: "Barbell Deadlift",
        sets: [1],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: deadliftBB,
      },
      {
        title: "Barbell Bench Press",
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: benchPressBB,
      },
      {
        title: "Dumbbell Rows",
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: rowDB1,
      },
      {
        title: "Dumbbell Shrugs",
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: shrugsDB,
      },
      {
        title: "Military Dumbbell Press",
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: militaryPressDB,
      },
      {
        title: "Rear Delt Flyes",
        sets: [1],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: rearDeltFly,
      },
      {
        title: "Barbell Curls",
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: curlsBB,
      },
      {
        title: "Tricep Pressdown",
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: triPressDown,
      },
      {
        title: "Isometric Planks",
        sets: [2],
        reps: [1],
        weight: 20,
        timed: true,
        timer: 60,
        notes: null,
        metric: true,
        imgUrl: plank,
      },
      {
        title: "Bodyweight Calf Raises",
        sets: [2],
        reps: [20, 40],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: calfRaisesBW,
      },
    ],
    restBreakSecs: 90,
  },
  //workout 2
  {
    _id: "2",
    imgUrl:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    mainTitle: "Anabolic Phase I: Workout A",
    discriptionShort: "To build maximum strength and power",
    discriptionExtra:
      "Rapid and dramatic strength gains. Your muscle will begin to feel hard and dense.",
    weekDuration: [4, 6],
    exercises: [
      // {
      //   title: "Box Squats",
      //   sets: [1],
      //   reps: [10],
      //   weight: 20,
      //   timed: false,
      //   timer: null,
      //   notes: null,
      //   metric: true,
      //   imgUrl: boxSquat,
      // },
      {
        title: "Barbell Squats",
        sets: [4, 6],
        reps: [1, 4],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: barbellSquat,
      },
      {
        title: "Barbell Bench Press",
        sets: [4, 6],
        reps: [1, 4],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: benchPressBB,
      },
      {
        title: "Weighted Pull-Ups",
        sets: [2],
        reps: [1, 6],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: pullup,
      },
      {
        title: "dumbbell Shrugs",
        sets: [3],
        reps: [3, 6],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: shrugsDB,
      },
      {
        title: "Barbell Curls",
        sets: [2],
        reps: [6, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: curlsBB,
      },
      {
        title: "Barbell Skull Crushers",
        sets: [2],
        reps: [6, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: pullover,
      },
      {
        title: "Weighted Decline Sit-Ups",
        sets: [5],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: "regular or positive incline situps are fine too",
        metric: true,
        imgUrl: situps,
      },
      {
        title: "Standing Calf Raises",
        sets: [5],
        reps: [8, 20],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: calfRaisesBW,
      },
    ],
    restBreakSecs: 180,
  },
  //workout 3
  {
    _id: "3",
    imgUrl:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80",
    mainTitle: "Anabolic Phase I: Workout B",
    discriptionShort: "To build maximum strength and power",
    discriptionExtra:
      "Rapid and dramatic strength gains. Your muscle will begin to feel hard and dense.",
    weekDuration: [4, 6],
    exercises: [
      {
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw",
        title: "Good Mornings",
        sets: [1],
        reps: [10],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: goodMornings,
      },
      {
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjwwwwwwwwwwwwww",
        title: "Barbell Deadlifts",
        sets: [4, 6],
        reps: [1, 4],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: deadliftBB,
      },
      {
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuwwwwwwkkkkklll",
        title: "Standing Overhead dumbbell Press",
        sets: [4, 6],
        reps: [1, 4],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: militaryPressDB,
      },
      {
        title: "Rear Delt Flyes",
        sets: [2],
        reps: [6, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: rearDeltFly,
      },
      {
        title: "Standing Dumbbell Shrugs",
        sets: [2],
        reps: [6, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: shrugsDB,
      },
      {
        title: "Dumbbell Hammer Curls",
        sets: [2],
        reps: [6, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: hammerCurls,
      },
      {
        title: "Overhead Tricep Extension",
        sets: [2],
        reps: [6, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: standingTricepExtension,
      },
      {
        title: "Hanging Leg Raises",
        sets: [5],
        reps: [8, 20],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: legRaisesSuspended,
      },
      {
        title: "Calf Raises",
        sets: [3],
        reps: [8, 20],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: calfRaisesBW,
      },
    ],
    restBreakSecs: 180,
  },

  //workout 5
  {
    _id: "5",
    imgUrl:
      "https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    //PHASE II: Weeks 7-9 Muscle Fiber
    mainTitle: "Anabolic Phase II: Workout A",
    discriptionShort:
      "Focus more on the feel of the muscles being worked. Aim for perfect form and a good pump.",
    discriptionExtra:
      "Aim for perfect form and a good pump. Fuller and rounder muscles.",
    weekDuration: [3],
    exercises: [
      {
        title: "Barbell Squats",
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: barbellSquat,
      },
      {
        title: "Bench Press",
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: benchPressBB,
      },
      {
        title: "Barbell Rows",
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: barbellRow,
      },
      {
        title: "Standing Dumbbell Shrugs",
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: shrugsDB,
      },
      {
        title: "Rear Delt Flyes",
        sets: [2],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: rearDeltFly,
      },
      {
        title: "Lateral Raise",
        sets: [2],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: lateralRaise,
      },
      {
        title: "Dumbbell Supinating Curls",
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: curlsSup,
      },
      {
        title: "Weighted Dips",
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: dips,
      },
      {
        title: "Calf Raises",
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: calfRaisesBW,
      },
      {
        title: "Hanging Leg Raises",
        sets: [3],
        reps: [8, 20],
        weight: 0,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: legRaisesSuspended,
      },
    ],
    restBreakSecs: 60,
  },
  //workout 6
  {
    _id: "6",
    imgUrl:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    mainTitle: "Anabolic Phase II: Workout B",
    discriptionShort: "Focus more on the feel of the muscles being worked.",
    discriptionExtra:
      "Aim for perfect form and a good pump. Fuller and rounder muscles.",
    weekDuration: [3],
    exercises: [
      {
        // #1
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw",
        title: "Barbell Deadlifts",
        sets: [3],
        reps: [4, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: deadliftBB,
      },
      {
        // #2
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw",
        title: "Lying Leg Curls",
        sets: [1],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: legCurls,
      },
      {
        // #3
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw",
        title: "Barbell Shrugs",
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: shrugsDB,
      },
      {
        // #4
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw",
        title: "Bench Press",
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: benchPressBB,
      },
      {
        // #5
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw",
        title: "Dumbbell Pullover",
        sets: [1],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: pullover,
      },
      {
        // #6
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw",
        title: "Bodyweight Chin-Ups",
        sets: [2],
        reps: [6, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: pullup,
      },
      {
        // #7
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw",
        title: "Dumbbell Shoulder Press",
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: militaryPressDB,
      },
      {
        // #8
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw",
        title: "Barbell Curls",
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: curlsBB,
      },
      {
        // #9
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw",
        title: "Tricep Pressdowns",
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: triPressDown,
      },
      {
        // #10
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw",
        title: "Standing Calf Raises",
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: calfRaisesBW,
      },
      {
        // #11
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw",
        title: "Bodyweight Decline Sit-Ups",
        sets: [3],
        reps: [30, 100],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: situps,
      },
      {
        // #11
        uuid: "aslkhfklahfklashfklhasfklhiheiohoihiohoiof8272jkxvckjgiuw",
        title: "hardcore ab workout",
        sets: [3],
        reps: [30, 100],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        isVideo: true,
        imgUrl: "5UbZXkF_40g",
      },
    ],
    restBreakSecs: 60,
  },
];

