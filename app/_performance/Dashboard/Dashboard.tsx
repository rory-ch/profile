"use client";

import React from "react";
import { useWebVitals } from "./useWebVitals";
import { WebVital } from "./types";
import { Anchor } from "@app/_ui";

const formatMs = (value?: number | null) =>
  typeof value === "number" ? `${Math.floor(value)} ms` : "...";

const glossary = (term?: string) =>
  `https://developer.mozilla.org/en-US/docs/Glossary${term ? `/${term}` : ""}`;

const descriptionByMetric: Record<WebVital, React.ReactElement> = {
  [WebVital.CLS]: (
    <p>
      CLS is a measure of the largest burst of <em>layout shift scores</em> for
      every{" "}
      <Anchor href="https://web.dev/articles/cls#expected_vs_unexpected_layout_shifts">
        unexpected
      </Anchor>{" "}
      layout shift that occurs during the entire lifespan of a page.
    </p>
  ),
  [WebVital.FCP]: (
    <p>
      <strong>First Contentful Paint</strong> (FCP) is when the browser renders
      the first bit of content from the DOM, providing the first feedback to the
      user that the page is actually loading. The question &quot;Is it
      happening?&quot; is &quot;yes&quot; when the first contentful paint
      completes.
    </p>
  ),
  [WebVital.FID]: (
    <p>
      <strong>First input delay</strong> (FID) measures the time from when a
      user first interacts with your site (i.e. when they click a link, tap on a
      button, or use a custom, JavaScript-powered control) to the time when the
      browser is actually able to respond to that interaction.
    </p>
  ),
  [WebVital.INP]: (
    <p>
      INP is a metric that assesses a page&apos;s overall responsiveness to user
      interactions by observing the latency of all click, tap, and keyboard
      interactions that occur throughout the lifespan of a user&apos;s visit to
      a page. The final INP value is the longest interaction observed, ignoring
      outliers.
    </p>
  ),
  [WebVital.LCP]: (
    <p>
      The key moment this API provides is the{" "}
      <Anchor href={glossary("Largest_contentful_paint")}>
        Largest Contentful Paint
      </Anchor>{" "}
      (LCP) metric. It provides the render time of the largest image or text
      block visible within the viewport, recorded from when the page first
      begins to load.
    </p>
  ),
  [WebVital.TTFB]: (
    <p>
      <strong>Time to First Byte</strong> (TTFB) refers to the time between the
      browser requesting a page and when it receives the first byte of
      information from the server. This time includes{" "}
      <Anchor href={glossary("DNS")}>DNS</Anchor> lookup and establishing the
      connection using a <Anchor href={glossary("TCP")}>TCP</Anchor> handshake
      and <Anchor href={glossary("TLS")}>TLS</Anchor> handshake if the request
      is made over <Anchor href={glossary("HTTPS")}>HTTPS</Anchor>.
    </p>
  ),
};

const MetricNameCell = ({ type }: { type: WebVital }) => {
  return (
    <th scope="row" className="text-xl p-2 relative">
      <div>
        <span className="text-left tracking-wider">{type}</span>
        <span className="text-left font-light text-sm">
          {descriptionByMetric[type]}
        </span>
      </div>
    </th>
  );
};

const ValueCell = ({
  value,
  rating,
}: {
  value?: number | null;
  rating?: string | null;
}) => {
  return (
    <td
      className={`flex justify-center items-center text-xl p-2 whitespace-nowrap ${
        rating === "good" ? "text-green-400" : ""
      }`}
    >
      {formatMs(value)}
    </td>
  );
};

const Row = ({ children }: React.PropsWithChildren) => (
  <tr className="border border-slate-500 group">{children}</tr>
);

const Dashboard = () => {
  const webVitals = useWebVitals();

  return (
    <div className="pt-20">
      <table className="border border-slate-500" aria-label="Web Vitals">
        <caption className="hidden">Source: MDN</caption>
        <colgroup>
          <col className="bg-slate-700" />
          <col className="bg-slate-800" />
        </colgroup>
        <tbody>
          <Row>
            <MetricNameCell type={WebVital.TTFB} />
            <ValueCell
              value={webVitals.TTFB?.value}
              rating={webVitals.TTFB?.rating}
            />
          </Row>
          <Row>
            <MetricNameCell type={WebVital.FCP} />
            <ValueCell
              value={webVitals.FCP?.value}
              rating={webVitals.FCP?.rating}
            />
          </Row>
          <Row>
            <MetricNameCell type={WebVital.CLS} />
            <ValueCell
              value={webVitals.CLS?.value}
              rating={webVitals.CLS?.rating}
            />
          </Row>
          <Row>
            <MetricNameCell type={WebVital.FID} />
            <ValueCell
              value={webVitals.FID?.value}
              rating={webVitals.FID?.rating}
            />
          </Row>
          <Row>
            <MetricNameCell type={WebVital.INP} />
            <ValueCell
              value={webVitals.INP?.value}
              rating={webVitals.INP?.rating}
            />
          </Row>
          <Row>
            <MetricNameCell type={WebVital.LCP} />
            <ValueCell
              value={webVitals.LCP?.value}
              rating={webVitals.LCP?.rating}
            />
          </Row>
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(Dashboard);
