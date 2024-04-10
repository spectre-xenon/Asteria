import type { FC } from "react";

const Menu: FC<{ handleClick: () => void; className?: string }> = ({
  handleClick,
  className,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`relative rounded-full bg-white px-7 py-2 md:hidden ${className}`}
    >
      <svg
        width="18"
        height="27"
        viewBox="0 0 18 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.895881 4.45551C0.895881 4.15777 0.998268 3.90712 1.20304 3.70356C1.40784 3.5 1.66001 3.39822 1.95955 3.39822C2.24697 3.39822 2.49094 3.5 2.69146 3.70356C2.89198 3.90712 2.99224 4.15777 2.99224 4.45551L2.99224 22.0553C2.99224 22.3409 2.88985 22.5855 2.68508 22.7891C2.48028 22.9926 2.23418 23.0944 1.94679 23.0944C1.64723 23.0944 1.39718 22.9926 1.19666 22.7891C0.99614 22.5855 0.895881 22.3409 0.895881 22.0553L0.895881 4.45551ZM8.46095 1.61459C8.46095 1.31684 8.56334 1.06619 8.76811 0.862635C8.97291 0.659076 9.22508 0.557296 9.52462 0.557296C9.81204 0.557296 10.056 0.659076 10.2565 0.862635C10.457 1.06619 10.5573 1.31684 10.5573 1.61459L10.5573 25.4036C10.5573 25.6892 10.4549 25.9338 10.2501 26.1374C10.0453 26.3409 9.79925 26.4427 9.51186 26.4427C9.2123 26.4427 8.96225 26.3409 8.76173 26.1374C8.56121 25.9338 8.46095 25.6892 8.46095 25.4036L8.46095 1.61459ZM15.8212 4.45551C15.8212 4.15777 15.9236 3.90712 16.1284 3.70356C16.3332 3.5 16.5854 3.39822 16.8849 3.39822C17.1723 3.39822 17.4163 3.5 17.6168 3.70356C17.8173 3.90712 17.9176 4.15777 17.9176 4.45551L17.9176 22.0553C17.9176 22.3409 17.8152 22.5855 17.6104 22.7891C17.4056 22.9926 17.1595 23.0944 16.8722 23.0944C16.5726 23.0944 16.3225 22.9926 16.122 22.7891C15.9215 22.5855 15.8212 22.3409 15.8212 22.0553L15.8212 4.45551Z"
          fill="black"
        />
      </svg>
    </button>
  );
};

export { Menu };
