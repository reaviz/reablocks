import { useState } from 'react';
import { Card } from '../../../src/layout/Card';
import { Divider } from '../../../src/layout/Divider';
import { MotionGroup, MotionItem } from '../../../src/layout/Motion';
import { Stack } from '../../../src/layout/Stack';
import { VerticalSpacer } from '../../../src/layout/VerticalSpacer';
import { Button } from '../../../src/elements/Button';
import { cn } from '../../../src/utils/Theme/helpers';
import { Chip } from '../../../src/elements/Chip';

export const PricingFull = () => {
  const [cycle, setCycle] = useState('Monthly');

  return (
    <Card className="w-full transition-colors" contentClassName="w-full h-full">
      <Stack justifyContent="spaceBetween">
        <Stack>
          <div className="bg-charade/40 rounded-sm p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2.83333 3.33337C1.82674 3.33337 1 4.16012 1 5.16671V11.5C1 12.5066 1.82674 13.3334 2.83333 13.3334H13.1667C14.1733 13.3334 15 12.5066 15 11.5V5.16671C15 4.16012 14.1733 3.33337 13.1667 3.33337H2.83333ZM2.83333 4.33337H13.1667C13.6327 4.33337 14 4.70063 14 5.16671V11.5C14 11.9661 13.6327 12.3334 13.1667 12.3334H2.83333C2.36726 12.3334 2 11.9661 2 11.5V5.16671C2 4.70063 2.36726 4.33337 2.83333 4.33337ZM3.5 5.66671C3.43374 5.66577 3.36796 5.67801 3.30648 5.70272C3.24499 5.72743 3.18903 5.76411 3.14185 5.81063C3.09466 5.85715 3.0572 5.91259 3.03162 5.97371C3.00605 6.03484 2.99288 6.10044 2.99288 6.16671C2.99288 6.23297 3.00605 6.29857 3.03162 6.3597C3.0572 6.42083 3.09466 6.47626 3.14185 6.52279C3.18903 6.56931 3.24499 6.60599 3.30648 6.6307C3.36796 6.6554 3.43374 6.66764 3.5 6.66671H8.16667C8.23292 6.66764 8.2987 6.6554 8.36019 6.6307C8.42167 6.60599 8.47763 6.56931 8.52482 6.52279C8.572 6.47626 8.60947 6.42083 8.63505 6.3597C8.66062 6.29857 8.67379 6.23297 8.67379 6.16671C8.67379 6.10044 8.66062 6.03484 8.63505 5.97371C8.60947 5.91259 8.572 5.85715 8.52482 5.81063C8.47763 5.76411 8.42167 5.72743 8.36019 5.70272C8.2987 5.67801 8.23292 5.66577 8.16667 5.66671H3.5ZM3.5 7.66671C3.43374 7.66577 3.36796 7.67801 3.30648 7.70272C3.24499 7.72743 3.18903 7.76411 3.14185 7.81063C3.09466 7.85715 3.0572 7.91259 3.03162 7.97371C3.00605 8.03484 2.99288 8.10044 2.99288 8.16671C2.99288 8.23297 3.00605 8.29857 3.03162 8.3597C3.0572 8.42083 3.09466 8.47626 3.14185 8.52279C3.18903 8.56931 3.24499 8.60599 3.30648 8.6307C3.36796 8.6554 3.43374 8.66764 3.5 8.66671H6.5C6.56626 8.66764 6.63204 8.6554 6.69352 8.6307C6.75501 8.60599 6.81097 8.56931 6.85815 8.52279C6.90534 8.47626 6.9428 8.42083 6.96838 8.3597C6.99395 8.29857 7.00712 8.23297 7.00712 8.16671C7.00712 8.10044 6.99395 8.03484 6.96838 7.97371C6.9428 7.91259 6.90534 7.85715 6.85815 7.81063C6.81097 7.76411 6.75501 7.72743 6.69352 7.70272C6.63204 7.67801 6.56626 7.66577 6.5 7.66671H3.5ZM8.91667 8.66671C8.59346 8.66671 8.3847 8.85711 8.2474 9.02543C8.11009 9.19375 8.01427 9.38142 7.93229 9.58272C7.76834 9.98532 7.66667 10.4304 7.66667 10.8334C7.66573 10.8996 7.67797 10.9654 7.70268 11.0269C7.72738 11.0884 7.76406 11.1443 7.81059 11.1915C7.85711 11.2387 7.91255 11.2762 7.97367 11.3018C8.0348 11.3273 8.1004 11.3405 8.16667 11.3405C8.23293 11.3405 8.29853 11.3273 8.35966 11.3018C8.42079 11.2762 8.47622 11.2387 8.52275 11.1915C8.56927 11.1443 8.60595 11.0884 8.63066 11.0269C8.65536 10.9654 8.6676 10.8996 8.66667 10.8334C8.66667 10.627 8.7447 10.2387 8.85807 9.96033C8.86723 9.93783 8.87521 9.93253 8.88477 9.9115C8.92186 10 8.95499 10.0644 8.99349 10.1706C9.06713 10.3738 9.13851 10.5878 9.23177 10.7858C9.2784 10.8849 9.32742 10.9813 9.41471 11.0847C9.50201 11.188 9.66667 11.3334 9.91667 11.3334C10.3917 11.3334 10.6552 11.0001 10.8053 10.808C10.8072 10.8056 10.8074 10.8052 10.8092 10.8028C10.8501 10.8398 10.8607 10.8557 10.916 10.8978C11.2139 11.1248 11.7132 11.3334 12.5 11.3334C12.5663 11.3343 12.632 11.3221 12.6935 11.2974C12.755 11.2727 12.811 11.236 12.8582 11.1895C12.9053 11.1429 12.9428 11.0875 12.9684 11.0264C12.994 10.9652 13.0071 10.8996 13.0071 10.8334C13.0071 10.7671 12.994 10.7015 12.9684 10.6404C12.9428 10.5793 12.9053 10.5238 12.8582 10.4773C12.811 10.4308 12.755 10.3941 12.6935 10.3694C12.632 10.3447 12.5663 10.3324 12.5 10.3334C11.8701 10.3334 11.6611 10.2086 11.5215 10.1023C11.4517 10.0491 11.3992 9.98954 11.3008 9.90043C11.2024 9.81132 11 9.66671 10.75 9.66671C10.4313 9.66671 10.3016 9.84299 10.2161 9.93949C10.1466 10.018 10.1012 10.0833 10.0547 10.1452C10.0152 10.0422 9.97967 9.95656 9.93359 9.82947C9.85619 9.61594 9.77434 9.39052 9.65365 9.17908C9.5933 9.07336 9.52403 8.96828 9.41341 8.86788C9.30279 8.76748 9.12547 8.66671 8.91667 8.66671Z"
                fill="#C9C9D6"
              />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10.47 4.94L9.53 4L5.53 8L9.53 12L10.47 11.06L7.41667 8L10.47 4.94Z"
              fill="#C9C9D6"
            />
          </svg>
          <a href="#" className="text-primary">
            Back to billing
          </a>
        </Stack>
        <Stack className="bg-vulcan rounded p-1" dense>
          {['Monthly', 'Yearly'].map(type => (
            <Button
              key={type}
              size="large"
              className={cn('text-lg', {
                'text-black bg-blue-100': cycle === type
              })}
              onClick={() => setCycle(type)}
            >
              {type}
            </Button>
          ))}
        </Stack>
      </Stack>
      <h4 className="text-[24px] font-bold">Plans</h4>
      <span className="text-waterloo text-base">
        Change your current workspace plan
      </span>
      <MotionGroup className="flex flex-col gap-2.5 mt-7">
        <div className="grid grid-cols-[400px,1fr,1fr,1fr] gap-2.5">
          <MotionItem className="self-end font-bold">Core Features</MotionItem>
          <MotionItem className="flex flex-col">
            <h6 className="text-lg font-bold">Founders Package</h6>
            <h2 className="text-2xl font-bold">
              {cycle === 'Monthly' ? '$1,000' : '$10,000'}
            </h2>
            <span className="text-waterloo text-sm">
              {cycle === 'Monthly' ? 'Per month' : 'Per year'}
            </span>
            <VerticalSpacer space="md" />
            <div className="bg-charade/40 py-2 px-4 rounded-sm flex gap-2 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M8.50001 1.33337C4.82001 1.33337 1.83334 4.32004 1.83334 8.00004C1.83334 11.68 4.82001 14.6667 8.50001 14.6667C12.18 14.6667 15.1667 11.68 15.1667 8.00004C15.1667 4.32004 12.18 1.33337 8.50001 1.33337ZM8.50001 13.3334C5.56001 13.3334 3.16668 10.94 3.16668 8.00004C3.16668 5.06004 5.56001 2.66671 8.50001 2.66671C11.44 2.66671 13.8333 5.06004 13.8333 8.00004C13.8333 10.94 11.44 13.3334 8.50001 13.3334ZM11.56 5.05337L7.16668 9.44671L5.44001 7.72671L4.50001 8.66671L7.16668 11.3334L12.5 6.00004L11.56 5.05337Z"
                  fill="white"
                />
              </svg>
              Current Plan
            </div>
            <Divider />
          </MotionItem>
          <MotionItem className="flex flex-col">
            <h6 className="text-lg font-bold">Startup Package</h6>
            <h2 className="text-2xl font-bold">
              {cycle === 'Monthly' ? '$5,000' : '$50,000'}
            </h2>
            <span className="text-waterloo text-sm">
              {cycle === 'Monthly' ? 'Per month' : 'Per year'}
            </span>
            <VerticalSpacer space="md" />
            <Button className="px-4 py-2 text-lg gap-2 bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus focus:outline-none transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M3.16669 7.99996L4.10669 8.93996L7.83335 5.21996V13.3333H9.16669V5.21996L12.8867 8.94663L13.8334 7.99996L8.50002 2.66663L3.16669 7.99996Z"
                  fill="white"
                />
              </svg>
              Upgrade
            </Button>
            <Divider />
          </MotionItem>
          <MotionItem className="flex flex-col">
            <h6 className="text-lg font-bold">Seed Package</h6>
            <h2 className="text-2xl font-bold">Let's talk</h2>
            <span className="text-waterloo text-sm">
              {cycle === 'Monthly' ? 'Per month' : 'Per year'}
            </span>
            <VerticalSpacer space="md" />
            <Button variant="outline" className="text-lg py-2 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.99998 1.33337C4.324 1.33337 1.33331 4.32406 1.33331 8.00004C1.33331 11.676 4.324 14.6667 7.99998 14.6667C11.676 14.6667 14.6666 11.676 14.6666 8.00004C14.6666 4.32406 11.676 1.33337 7.99998 1.33337ZM7.99998 2.33337C11.1355 2.33337 13.6666 4.8645 13.6666 8.00004C13.6666 11.1356 11.1355 13.6667 7.99998 13.6667C4.86444 13.6667 2.33331 11.1356 2.33331 8.00004C2.33331 4.8645 4.86444 2.33337 7.99998 2.33337ZM7.99998 3.33337C5.42846 3.33337 3.33331 5.42853 3.33331 8.00004C3.33331 10.5716 5.42846 12.6667 7.99998 12.6667C8.57568 12.6667 9.1294 12.5622 9.63995 12.3705C9.70216 12.348 9.75927 12.3133 9.80799 12.2685C9.85671 12.2238 9.89605 12.1698 9.92376 12.1097C9.95146 12.0496 9.96696 11.9846 9.96937 11.9185C9.97178 11.8524 9.96104 11.7865 9.93778 11.7245C9.91452 11.6626 9.8792 11.6059 9.83387 11.5577C9.78854 11.5095 9.7341 11.4708 9.6737 11.4438C9.6133 11.4168 9.54814 11.4021 9.482 11.4004C9.41586 11.3988 9.35005 11.4103 9.28839 11.4343C8.88828 11.5845 8.45494 11.6667 7.99998 11.6667C5.96883 11.6667 4.33331 10.0312 4.33331 8.00004C4.33331 5.96889 5.96883 4.33337 7.99998 4.33337C10.0311 4.33337 11.6666 5.96889 11.6666 8.00004V8.50004C11.6666 8.96612 11.2994 9.33337 10.8333 9.33337C10.3672 9.33337 9.99998 8.96612 9.99998 8.50004V6.16671C10.001 6.0439 9.9567 5.92504 9.87566 5.83277C9.79462 5.74049 9.68246 5.68127 9.56056 5.66639C9.43865 5.6515 9.31554 5.68199 9.21468 5.75205C9.11381 5.82211 9.04226 5.92684 9.01365 6.04626C8.67619 5.80813 8.27254 5.66671 7.83331 5.66671C6.61604 5.66671 5.66665 6.74253 5.66665 8.00004C5.66665 9.25755 6.61604 10.3334 7.83331 10.3334C8.45023 10.3334 8.99741 10.0561 9.388 9.61983C9.72449 10.0521 10.2477 10.3334 10.8333 10.3334C11.8399 10.3334 12.6666 9.50663 12.6666 8.50004V8.00004C12.6666 5.42853 10.5715 3.33337 7.99998 3.33337ZM7.83331 6.66671C8.45404 6.66671 8.99998 7.23555 8.99998 8.00004C8.99998 8.76453 8.45404 9.33337 7.83331 9.33337C7.21258 9.33337 6.66665 8.76453 6.66665 8.00004C6.66665 7.23555 7.21258 6.66671 7.83331 6.66671Z"
                  fill="white"
                />
              </svg>
              Email Sales
            </Button>
            <Divider />
          </MotionItem>
        </div>
        <MotionItem className="grid grid-cols-[400px,1fr,1fr,1fr] justify-items-center items-center gap-2.5 text-base">
          <div className="justify-self-start">Design Support (Add On)</div>
          <div>
            <Chip
              color="primary"
              className="rounded-full px-3 text-athens-gray bg-[#041028]"
            >
              Unlimited
            </Chip>
          </div>
          <div>
            <Chip
              color="primary"
              className="rounded-full px-3 text-athens-gray bg-[#041028]"
            >
              Unlimited
            </Chip>
          </div>
          <div>
            <Chip
              color="primary"
              className="rounded-full px-3 text-athens-gray bg-[#041028]"
            >
              Unlimited
            </Chip>
          </div>
        </MotionItem>
        <MotionItem>
          <Divider className="bg-charade via-charade" />
        </MotionItem>
        <MotionItem className="grid grid-cols-[400px,1fr,1fr,1fr] justify-items-center items-center text-center gap-2.5 text-base text-waterloo">
          <div className="justify-self-start text-athens-gray">
            Product Research
          </div>
          <div>Logo and brand book</div>
          <div>Competitor analysis Product guidance</div>
          <div>
            <a href="" className="inline-flex items-center gap-2 text-primary">
              See details{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.00002 2.66663L7.06002 3.60663L10.78 7.33329H2.66669V8.66663H10.78L7.06002 12.3933L8.00002 13.3333L13.3334 7.99996L8.00002 2.66663Z"
                  fill="#105EFF"
                />
              </svg>
            </a>
          </div>
        </MotionItem>
        <MotionItem>
          <Divider className="bg-charade via-charade" />
        </MotionItem>
        <MotionItem className="grid grid-cols-[400px,1fr,1fr,1fr] justify-items-center items-center text-center gap-2.5 text-base text-waterloo">
          <div className="justify-self-start text-athens-gray">
            Brand Style Guide
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.6667 4.27337L11.7267 3.33337L8.00001 7.06004L4.27334 3.33337L3.33334 4.27337L7.06001 8.00004L3.33334 11.7267L4.27334 12.6667L8.00001 8.94004L11.7267 12.6667L12.6667 11.7267L8.94001 8.00004L12.6667 4.27337Z"
                fill="#E00007"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.86332 10.5834L3.08332 7.80336L2.13666 8.74336L5.86332 12.47L13.8633 4.47003L12.9233 3.53003L5.86332 10.5834Z"
                fill="#105EFF"
              />
            </svg>
          </div>
          <div>
            <a href="" className="inline-flex items-center gap-2 text-primary">
              See details{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.00002 2.66663L7.06002 3.60663L10.78 7.33329H2.66669V8.66663H10.78L7.06002 12.3933L8.00002 13.3333L13.3334 7.99996L8.00002 2.66663Z"
                  fill="#105EFF"
                />
              </svg>
            </a>
          </div>
        </MotionItem>
        <MotionItem>
          <Divider className="bg-charade via-charade" />
        </MotionItem>
        <MotionItem className="grid grid-cols-[400px,1fr,1fr,1fr] justify-items-center items-center text-center gap-2.5 text-base text-waterloo">
          <div className="justify-self-start text-athens-gray">
            Prototype of Web Application
          </div>
          <div>3 Figma Designs</div>
          <div>Fully interactive prototype</div>
          <div>
            <a href="" className="inline-flex items-center gap-2 text-primary">
              See details{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.00002 2.66663L7.06002 3.60663L10.78 7.33329H2.66669V8.66663H10.78L7.06002 12.3933L8.00002 13.3333L13.3334 7.99996L8.00002 2.66663Z"
                  fill="#105EFF"
                />
              </svg>
            </a>
          </div>
        </MotionItem>
        <MotionItem>
          <Divider className="bg-charade via-charade" />
        </MotionItem>
        <MotionItem className="grid grid-cols-[400px,1fr,1fr,1fr] justify-items-center items-center text-center gap-2.5 text-base text-waterloo">
          <div className="justify-self-start text-athens-gray">
            Development of Web Application
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.6667 4.27337L11.7267 3.33337L8.00001 7.06004L4.27334 3.33337L3.33334 4.27337L7.06001 8.00004L3.33334 11.7267L4.27334 12.6667L8.00001 8.94004L11.7267 12.6667L12.6667 11.7267L8.94001 8.00004L12.6667 4.27337Z"
                fill="#E00007"
              />
            </svg>
          </div>
          <div>Build out of pages/features in react.js</div>
          <div>Build out of pages/features in react.js</div>
        </MotionItem>
        <MotionItem>
          <Divider className="bg-charade via-charade" />
        </MotionItem>
      </MotionGroup>
    </Card>
  );
};
