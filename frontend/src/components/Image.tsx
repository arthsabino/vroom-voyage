export const svgs: Record<string, JSX.Element> = {
  hamburger: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <symbol id="icon-hamburger" viewBox="0 0 32 32">
          <path d="M26.494 22.792c1.145 0 2.074 0.941 2.074 2.102 0 1.103-0.838 2.007-1.903 2.095l-0.17 0.007h-20.988c-1.145 0-2.074-0.941-2.074-2.102 0-1.103 0.838-2.007 1.903-2.095l0.17-0.007h20.988zM26.494 14.384c1.145 0 2.074 0.941 2.074 2.102 0 1.103-0.838 2.007-1.903 2.095l-0.17 0.007h-20.988c-1.145 0-2.074-0.941-2.074-2.102 0-1.103 0.838-2.007 1.903-2.095l0.17-0.007h20.988zM26.494 5.004c1.145 0 2.074 0.941 2.074 2.102 0 1.103-0.838 2.007-1.903 2.095l-0.17 0.007h-20.988c-1.145 0-2.074-0.941-2.074-2.102 0-1.103 0.838-2.007 1.903-2.095l0.17-0.007h20.988z"></path>
        </symbol>
      </defs>
      <use xlinkHref="#icon-hamburger" fill="currentColor"></use>
    </svg>
  ),
  cross: (
    <svg style={{ width: "inherit", height: "inherit" }} viewBox="7 7 10 10">
      <path
        d="M12 10.8891L15.8891 7L17 8.11094L13.1109 12L17 15.8891L15.8891 17L12 13.1109L8.11094 17L7 15.8891L10.8891 12L7 8.11094L8.11094 7L12 10.8891Z"
        fill="currentColor"
      />
    </svg>
  ),
  pin: (
    <svg
      style={{ width: "inherit", height: "inherit" }}
      viewBox="5 3 16 18"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <g transform="translate(2.5 2.5) scale(0.25 0.25)">
        <path
          d="M67.9355 31.6666C67.9355 53.8333 38.9971 72.8333 38.9971 72.8333C38.9971 72.8333 10.0586 53.8333 10.0586 31.6666C10.0586 24.108 13.1075 16.8589 18.5345 11.5141C23.9615 6.1693 31.3221 3.16663 38.9971 3.16663C46.672 3.16663 54.0326 6.1693 59.4596 11.5141C64.8866 16.8589 67.9355 24.108 67.9355 31.6666Z"
          stroke="white"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38.9977 41.1666C44.3251 41.1666 48.6439 36.9133 48.6439 31.6666C48.6439 26.4199 44.3251 22.1666 38.9977 22.1666C33.6703 22.1666 29.3516 26.4199 29.3516 31.6666C29.3516 36.9133 33.6703 41.1666 38.9977 41.1666Z"
          stroke="white"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),
  chevron_down: (
    <svg
      style={{ width: "inherit", height: "inherit" }}
      viewBox="1 -2 10 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L5.5 5.5L10 1" stroke="currentColor" />
    </svg>
  ),
  calendar: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "inherit", height: "inherit" }}
      viewBox="0 0 448 512"
      stroke="currentColor"
      fill="currentColor"
    >
      <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
    </svg>
  ),
  clock: (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      style={{ width: "inherit", height: "inherit" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="currentColor" />
      <path
        d="M8 3V7.75C8 7.88807 8.11193 8 8.25 8H11"
        stroke="#fff"
        strokeLinecap="round"
      />
    </svg>
  ),
};
