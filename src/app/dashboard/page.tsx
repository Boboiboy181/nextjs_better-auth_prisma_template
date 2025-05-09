"use client";

import { type Scope, animate, createScope, onScroll } from "animejs";
import Image from "next/image";
import { Fragment, useEffect, useRef } from "react";

export default function Home() {
  const root = useRef(null);
  const scope = useRef<Scope>(null);

  useEffect(() => {
    if (!root.current) return;

    scope.current = createScope({ root }).add(() => {
      animate("h1", {
        opacity: [0, 1],
        translateY: ["1rem", 0],
        duration: 300,
        easing: "easeInOutCubic",
      });

      animate("p", {
        opacity: [0, 1],
        translateY: ["1rem", 0],
        duration: 500,
        easing: "easeInOutCubic",
        delay: 300,
      });

      animate(".logo", {
        ease: "linear",
        loop: true,
        rotate: [0, 360],
        duration: 10000,
        delay: 1000,
      });

      animate(".scroll-target", {
        x: [0, "-300vw"],
        autoplay: onScroll({
          container: ".scroll-container",
          // Enters when the bottom of the target meets the center of the container
          enter: { target: "bottom", container: "center" },
          // Leaves when the top of the target meets the top of the container
          leave: { target: "top", container: "top" },
          sync: 1,
          debug: true,
        }),
      });
    });

    return () => {
      scope.current?.revert();
    };
  }, []);

  return (
    <Fragment>
      <div className="h-[calc(100vh-69px)] relative bg-orange-200">
        <div className="flex gap-4 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            className="dark:invert w-48 h-auto"
            src="/next.svg"
            alt="Next.js logo"
            width={0}
            height={0}
            priority
          />
          <Image
            className="text-black w-52 h-auto"
            src="/anime-js.svg"
            alt="Anime.js logo"
            width={0}
            height={0}
            priority
          />
          <Image
            className="dark:invert w-20 h-auto"
            src="/better-auth.svg"
            alt="Better Auth logo"
            width={0}
            height={0}
            priority
          />
        </div>
      </div>
      <div
        ref={root}
        className="scroll-container text-center flex h-[calc(200vh)]"
      >
        <div className="sticky top-0 h-screen w-screen flex items-center overflow-hidden">
          <div className="flex scroll-target">
            <div className="section w-screen py-10 flex-1 bg-blue-200">
              <h1 className="appName text-5xl font-bold">iPortal.one</h1>
              <p className="appDscr mt-4 text-lg text-gray-600">
                A simple and powerful portal for your business.
              </p>
              <Image
                className="dark:invert mx-auto mt-8 logo"
                src="/react.svg"
                alt="React.js logo"
                width={100}
                height={38}
                priority
              />
            </div>
            <div className="section w-screen py-10 flex-1 bg-green-200">
              <h1 className="appName text-5xl font-bold">iPortal.one</h1>
              <p className="appDscr mt-4 text-lg text-gray-600">
                A simple and powerful portal for your business.
              </p>
              <Image
                className="dark:invert mx-auto mt-8 logo"
                src="/react.svg"
                alt="React.js logo"
                width={100}
                height={38}
                priority
              />
            </div>
            <div className="section w-screen py-10 flex-1 bg-red-200">
              <h1 className="appName text-5xl font-bold">iPortal.one</h1>
              <p className="appDscr mt-4 text-lg text-gray-600">
                A simple and powerful portal for your business.
              </p>
              <Image
                className="dark:invert mx-auto mt-8 logo"
                src="/react.svg"
                alt="React.js logo"
                width={100}
                height={38}
                priority
              />
            </div>
            <div className="section w-screen py-10 flex-1 bg-slate-200">
              <h1 className="appName text-5xl font-bold">iPortal.one</h1>
              <p className="appDscr mt-4 text-lg text-gray-600">
                A simple and powerful portal for your business.
              </p>
              <Image
                className="dark:invert mx-auto mt-8 logo"
                src="/react.svg"
                alt="React.js logo"
                width={100}
                height={38}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen relative bg-amber-200">
        <div className="flex gap-4 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-2xl font-semibold">The End</p>
        </div>
      </div>
    </Fragment>
  );
}
