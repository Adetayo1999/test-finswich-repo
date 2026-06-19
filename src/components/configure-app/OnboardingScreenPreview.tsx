import { useId } from "react";
import defaultIllustration from "@/assets/onboarding-default-illustration.png";

type OnboardingScreenPreviewProps = {
  slideLabel?: string;
  bgPrimaryColor: string;
  bgSecondaryColor: string;
  titleColor: string;
  subtitleColor: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonPrimaryColor: string;
  buttonSecondaryColor: string;
  buttonTextColor: string;
  uploadedImage?: string | null;
  className?: string;
};

function wrapText(text: string, fallback: string) {
  const value = text.trim();
  return value.length > 0 ? value : fallback;
}

function splitLines(text: string, maxCharsPerLine: number, maxLines: number) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length <= maxCharsPerLine) {
      current = next;
      continue;
    }

    if (current) lines.push(current);
    current = word;

    if (lines.length >= maxLines) break;
  }

  if (current && lines.length < maxLines) {
    lines.push(current);
  }

  if (lines.length === 0) {
    return [text.slice(0, maxCharsPerLine)];
  }

  if (lines.length === maxLines && words.join(" ").length > lines.join(" ").length) {
    const last = lines[maxLines - 1];
    lines[maxLines - 1] =
      last.length > maxCharsPerLine - 1
        ? `${last.slice(0, maxCharsPerLine - 1)}…`
        : `${last}…`;
  }

  return lines;
}

export function OnboardingScreenPreview({
  slideLabel = "Slide 1 Preview",
  bgPrimaryColor,
  bgSecondaryColor,
  titleColor,
  subtitleColor,
  title,
  subtitle,
  buttonText,
  buttonPrimaryColor,
  buttonSecondaryColor,
  buttonTextColor,
  uploadedImage,
  className,
}: OnboardingScreenPreviewProps) {
  const uid = useId().replace(/:/g, "");
  const bgGradientId = `onboarding-bg-${uid}`;
  const buttonGradientId = `onboarding-btn-${uid}`;
  const shadowFilterId = `onboarding-shadow-${uid}`;
  const imageClipId = `onboarding-image-clip-${uid}`;

  const displayTitle = wrapText(
    title,
    "Unlock so much more, grow your finance",
  );
  const displaySubtitle = wrapText(
    subtitle,
    "You can open a store in seconds and start selling to millions.",
  );
  const displayButtonText = wrapText(buttonText, "Get Started");
  const illustrationSrc = uploadedImage ?? defaultIllustration;
  const titleLines = splitLines(displayTitle, 22, 3);
  const subtitleLines = splitLines(displaySubtitle, 30, 4);

  const imageY = 175.242;
  const imageHeight = 171.094;
  const imageToTitleGap = 44;
  const titleStartY = imageY + imageHeight + imageToTitleGap;
  const titleLineHeight = 26;
  const subtitleGap = 8;
  const subtitleLineHeight = 18;
  const subtitleStartY =
    titleStartY + titleLines.length * titleLineHeight + subtitleGap;

  const buttonX = 56;
  const buttonY = 636.767;
  const buttonWidth = 217;
  const buttonHeight = 37.0043;

  return (
    <svg
      viewBox="0 0 368 752"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={`${slideLabel} onboarding screen preview`}
    >
      <text
        x="184"
        y="16"
        textAnchor="middle"
        fill="#5C5C60"
        fontSize="14"
        fontWeight="700"
        fontFamily="Inter, system-ui, sans-serif"
      >
        {slideLabel}
      </text>

      <g filter={`url(#${shadowFilterId})`}>
        <rect
          x="28"
          y="48"
          width="312"
          height="670"
          rx="28.7554"
          fill={`url(#${bgGradientId})`}
        />

        <text
          x="57"
          y="74"
          fill="#333333"
          fontSize="12"
          fontWeight="600"
          fontFamily="Inter, system-ui, sans-serif"
        >
          9:41
        </text>

        <path
          d="M275.418 65.2961C275.807 65.6627 276.425 65.6987 276.845 65.368C280.406 62.6075 285.577 62.6075 289.147 65.3608C289.574 65.6915 290.199 65.6627 290.588 65.2961C291.038 64.872 291.008 64.1675 290.512 63.7864C286.157 60.4293 279.857 60.4293 275.495 63.7864C274.999 64.1603 274.961 64.8648 275.418 65.2961ZM281.337 70.8746L282.458 71.9314C282.755 72.2118 283.236 72.2118 283.533 71.9314L284.654 70.8746C285.013 70.5368 284.937 69.9545 284.479 69.7316C284.018 69.5083 283.507 69.3919 282.988 69.3919C282.469 69.3919 281.958 69.5083 281.497 69.7316C281.062 69.9545 280.978 70.5368 281.337 70.8746ZM278.492 68.1932C278.866 68.5455 279.453 68.5814 279.888 68.2867C280.798 67.6798 281.885 67.354 282.999 67.354C284.114 67.354 285.201 67.6798 286.111 68.2867C286.546 68.5742 287.133 68.5455 287.507 68.1932L287.515 68.186C287.972 67.7547 287.942 67.0214 287.415 66.6692C284.792 64.8792 281.215 64.8792 278.583 66.6692C278.057 67.0286 278.027 67.7547 278.492 68.1932Z"
          fill="#333333"
        />
        <path
          d="M305.881 62.3774C305.476 62.3774 305.088 62.5289 304.802 62.7986C304.516 63.0682 304.355 63.4339 304.355 63.8152V69.5663C304.355 69.9476 304.516 70.3133 304.802 70.5829C305.088 70.8526 305.476 71.0041 305.881 71.0041H316.558C316.963 71.0041 317.351 70.8526 317.637 70.5829C317.923 70.3133 318.084 69.9476 318.084 69.5663V68.8474C318.488 68.8474 318.876 68.6959 319.162 68.4263C319.448 68.1567 319.609 67.791 319.609 67.4096V65.9719C319.609 65.5905 319.448 65.2248 319.162 64.9552C318.876 64.6856 318.488 64.5341 318.084 64.5341V63.8152C318.084 63.4339 317.923 63.0682 317.637 62.7986C317.351 62.5289 316.963 62.3774 305.881 62.3774Z"
          fill="#333333"
        />

        <defs>
          <clipPath id={imageClipId}>
            <rect
              x="54.8809"
              y="175.242"
              width="247.296"
              height="171.094"
              rx="34.5064"
            />
          </clipPath>
        </defs>

        <image
          href={illustrationSrc}
          x="54.8809"
          y="175.242"
          width="247.296"
          height="171.094"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${imageClipId})`}
        />

        <text
          y={titleStartY}
          fill={titleColor}
          fontSize="22"
          fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
        >
          {titleLines.map((line, index) => (
            <tspan
              key={`title-${index}`}
              x="56"
              dy={index === 0 ? 0 : titleLineHeight}
            >
              {line}
            </tspan>
          ))}
        </text>

        <text
          y={subtitleStartY}
          fill={subtitleColor}
          fontSize="14"
          fontWeight="400"
          fontFamily="Inter, system-ui, sans-serif"
        >
          {subtitleLines.map((line, index) => (
            <tspan
              key={`subtitle-${index}`}
              x="56"
              dy={index === 0 ? 0 : subtitleLineHeight}
            >
              {line}
            </tspan>
          ))}
        </text>

        <rect
          x={buttonX}
          y={buttonY}
          width={buttonWidth}
          height={buttonHeight}
          rx="18.5021"
          fill={`url(#${buttonGradientId})`}
        />

        <rect
          x="277.813"
          y="637.127"
          width="38.1009"
          height="36.2854"
          rx="18.1427"
          stroke={buttonPrimaryColor}
          strokeWidth="0.718884"
          fill="white"
        />
        <path
          d="M301.165 655.198C301.165 655.4 301.096 655.568 300.958 655.703L298.104 658.551C297.962 658.693 297.803 658.764 297.627 658.764C297.425 658.764 297.262 658.702 297.138 658.579C297.015 658.451 296.953 658.296 296.953 658.113C296.953 658.008 296.972 657.916 297.009 657.837C297.05 657.755 297.103 657.684 297.167 657.624L298.06 656.725L299.559 655.361L299.851 655.787L298.076 655.889H293.274C293.061 655.889 292.889 655.825 292.758 655.698C292.627 655.57 292.561 655.404 292.561 655.198C292.561 654.996 292.627 654.831 292.758 654.703C292.889 654.576 293.061 654.513 293.274 654.513H298.076L299.851 654.614L299.559 655.04L298.06 653.676L297.167 652.771C297.103 652.712 297.05 652.642 297.009 652.564C296.972 652.481 296.953 652.388 296.953 652.283C296.953 652.099 297.015 651.946 297.138 651.822C297.262 651.695 297.425 651.631 297.627 651.631C297.803 651.631 297.962 651.703 298.104 651.845L300.958 654.692C301.096 654.831 301.165 654.999 301.165 655.198Z"
          fill={buttonPrimaryColor}
        />
      </g>

      <foreignObject
        x={buttonX}
        y={buttonY}
        width={buttonWidth}
        height={buttonHeight}
        pointerEvents="none"
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            color: buttonTextColor,
            fontSize: "11px",
            fontWeight: 700,
            fontFamily: "Inter, system-ui, sans-serif",
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          {displayButtonText}
        </div>
      </foreignObject>

      <defs>
        <linearGradient
          id={bgGradientId}
          x1="28"
          y1="48"
          x2="340"
          y2="718"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={bgPrimaryColor} />
          <stop offset="1" stopColor={bgSecondaryColor} />
        </linearGradient>
        <linearGradient
          id={buttonGradientId}
          x1={buttonX}
          y1={buttonY}
          x2={buttonX + buttonWidth}
          y2={buttonY + buttonHeight}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={buttonPrimaryColor} />
          <stop offset="1" stopColor={buttonSecondaryColor} />
        </linearGradient>
        <filter
          id={shadowFilterId}
          x="0"
          y="26"
          width="368"
          height="726"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="6"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="11" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
