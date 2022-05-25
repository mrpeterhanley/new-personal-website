/** @jsx jsx */
import * as React from "react"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// @ts-ignore
import AboutMDX from "@lekoarts/gatsby-theme-cara/src/sections/about"
import { jsx } from "theme-ui"

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="box" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <Svg icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
        <Svg icon="upDown" hiddenMobile width={24} color="icon_orange" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
        <Svg icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <Svg icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner
      >
        <div
          sx={{
            '& ul': { paddingLeft: `0` },
            '& li': { fontSize: `1.25rem`, listStyle: `none`, paddingLeft: `0` },
            '@media screen and (max-width: 400px)': {
              '& li': { fontSize: `1rem` },
            },
          }}
          >
            <AboutMDX />
           <ul>
             <li>✔ Javascript, React, Gatsby</li>
             <li>✔ CSS, Responsive Web Design</li>
             <li>✔ Node.js, PHP, Liquid</li>
             <li>✔ RESTful APIs</li>
             <li>✔ CMSs such as Siteglide, Wordpress, Webflow</li>
             <li>✔ eCommerce Platforms such as Shopify</li>
             <li>✔ Cloud and Serverless Computing (I am a <a href="https://www.credly.com/users/peter-hanley-dev">Certified AWS Developer & Solutions Architect</a>)</li>
           </ul>
        
        </div>
      </Inner>
    </Content>
  </div>
)

export default About
