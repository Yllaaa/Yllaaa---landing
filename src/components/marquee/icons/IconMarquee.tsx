/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./iconMarquee.module.css";

type Props = {
  img1?: string | any;
  img2?: string | any;
  img3?: string | any;
  img4?: string | any;
  img5?: string | any;
  img6?: string | any;
  img7?: string | any;
  img8?: string | any;
};
function IconMarquee(props: Props) {
  const { img1, img2, img3, img4, img5, img6, img7, img8 } = props;

  return (
    <>
      <div className={styles.cardMarquee}>
        {img1 && img2 && img3 && img4 && img5 && img6 && img7 && (
          <Marquee speed={50}
          autoFill={true}
          >
            
              <div className={styles.element}>
                <Image src={img1} alt="1" />
              </div>
              <div className={styles.element}>
                <Image src={img2} alt="1" />
              </div>
              <div className={styles.element}>
                <Image src={img3} alt="1" />
              </div>
              <div className={styles.element}>
                <Image src={img4} alt="1" />
              </div>
              <div className={styles.element}>
                <Image src={img5} alt="1" />
              </div>
              <div className={styles.element}>
                <Image src={img6} alt="1" />
              </div>
              <div className={styles.element}>
                <Image src={img7} alt="1" />
              </div>
              {img8 && (
                <div className={styles.element}>
                  <Image src={img8} alt="1" />
                </div>
              )}
            
          </Marquee>
        )}
      </div>
    </>
  );
}

export default IconMarquee;
