"use client";
import Image from "next/image";
import btnArrowStart from "../../../public/icons/btnArrowStart.svg";
import styles from "./buttonFlip.module.css";
import { ScreenBreakpoints } from "@/Utils/screenBreakPoints/ScreenBreakPoints";
type Props = {
  lable: string;
};
function ButtonFlip(props: Props) {
  const { lable } = props;
  const { isDesktop } = ScreenBreakpoints();
  return (
    <>
      <div className={styles.buttonFlip}>
        <p>{lable}</p>
        {isDesktop && <Image src={btnArrowStart} alt="btnArrowStart" />}
      </div>
    </>
  );
}

export default ButtonFlip;
