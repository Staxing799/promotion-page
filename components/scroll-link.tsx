"use client";

import {
  type AnchorHTMLAttributes,
  type MouseEvent as ReactMouseEvent,
} from "react";

type ScrollLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  targetId: string;
};

function clearHashFromUrl() {
  const cleanUrl = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(window.history.state, "", cleanUrl);
}

function getScrollOffset() {
  const topbar = document.querySelector(".topbar");

  if (!(topbar instanceof HTMLElement)) {
    return 96;
  }

  const styles = window.getComputedStyle(topbar);
  const stickyTop = Number.parseFloat(styles.top || "0");

  return topbar.getBoundingClientRect().height + stickyTop + 24;
}

export function ScrollLink({
  targetId,
  onClick,
  children,
  ...props
}: ScrollLinkProps) {
  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    clearHashFromUrl();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - getScrollOffset();

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: reducedMotion.matches ? "auto" : "smooth",
    });
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
