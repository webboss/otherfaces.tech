import React from "react";

import { Br, Button, Text } from "components";
import Container from "components/container";

export const HomeHeader = () => {
  return (
    <header className="text-primary-100 text-center min-h-screen md:mt-0 mt-8 flex-col flex items-center justify-center">
      <Container>
        <Text variant="h1" weight="500">
          Everyone in tech <Br on="mobile" />
          <span className="line-through">writes code</span>
        </Text>

        <div className="md:max-w-[950px] max-w-[700px] mx-auto  ">
          <Text variant="p18" className="mt-[20px] mb-20 max-w-[1000px]">
            We are telling stories and providing roadmaps to non-coding careers
            in tech.
          </Text>
        </div>
        <Button size="large" to="#recent-stories">
          Start your journey
        </Button>
      </Container>

      <div className=" w-full overflow-hidden">
        <div className="mt-32 relative">
          <div className=" absolute translate-y-[-34%]  right-0 ">
            <svg
              width="261"
              height="144"
              viewBox="0 0 261 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M234.477 57.1809C236.174 57.952 238.961 59.2481 242.399 60.9129C245.842 62.6322 249.961 64.6791 254.348 66.8677C263.138 71.322 273.292 76.1408 281.603 79.2247C291.166 82.858 301.351 85.5171 311.865 86.0958L313.835 86.1981C314.491 86.2322 315.154 86.1912 315.803 86.1922L319.744 86.1267C321.061 86.1519 322.365 85.9382 323.673 85.8221L327.589 85.4086L331.456 84.6881C332.733 84.4181 334.044 84.259 335.298 83.8682L339.083 82.838C339.704 82.6528 340.354 82.5133 340.967 82.2951L342.807 81.6404C352.672 78.2612 361.831 73.2761 370.214 67.371C378.578 61.4211 386.156 54.5504 393.087 47.1598C395.291 44.8819 398.116 41.662 400.158 38.873C402.14 36.0249 403.359 33.6417 402.347 32.9504C400.179 31.4907 394.762 36.0799 387.366 43.7337C378.377 52.9712 368.409 61.369 357.279 67.7977C355.92 68.6554 354.478 69.3438 353.052 70.0877C351.629 70.8102 350.222 71.5882 348.734 72.1862C347.264 72.8182 345.813 73.4735 344.336 74.0724L339.822 75.6572C333.759 77.5534 327.517 78.8724 321.23 79.1822C312.036 79.7532 302.851 78.2926 293.941 75.7634C285.011 73.2108 276.377 69.4724 267.845 65.4184C259.314 61.343 250.885 56.8436 242.178 52.6882C233.468 48.5651 224.512 44.6698 215.043 41.9742C210.798 40.7814 206.463 39.7541 202.051 39.131C197.638 38.5186 193.155 38.2138 188.66 38.3187C184.104 38.4943 179.581 39.1807 175.193 40.3111C170.82 41.5184 166.58 43.1911 162.543 45.281C158.535 47.4166 154.765 50.0482 151.328 53.0972C147.891 56.1462 144.953 59.7999 142.57 63.8032C142.018 64.8375 141.383 65.8215 140.913 66.8952L139.546 70.1414C138.847 72.3849 138.083 74.6337 137.798 76.9772C136.928 81.6278 137.174 86.3626 137.864 90.8538C138.542 95.0953 139.666 99.1693 140.975 103.108C141.651 105.079 142.269 106.969 143.193 109.08C144.091 111.113 145.135 113.072 146.426 114.933C147.706 116.793 149.187 118.584 151.052 120.169C152.898 121.731 155.219 123.171 158.094 123.686C159.509 123.957 161.027 123.913 162.467 123.635C163.191 123.513 163.852 123.234 164.531 123.01C165.21 122.776 165.816 122.384 166.461 122.05C167.095 121.714 167.648 121.178 168.227 120.729C168.787 120.247 169.238 119.647 169.729 119.084C170.157 118.493 170.514 117.853 170.881 117.225C171.152 116.588 171.434 115.931 171.663 115.28C172.479 112.668 172.543 110.133 172.332 107.769C172.101 105.403 171.556 103.162 170.82 101.002C170.083 98.864 169.127 96.7504 167.972 94.8144C166.847 93.0432 165.79 91.2237 164.607 89.5015C159.898 82.5611 154.306 76.2267 148.03 70.6777C137.211 61.0888 124.367 53.8362 110.603 49.5112C96.8319 45.1531 82.1298 43.9918 67.9152 45.7477C61.2214 46.531 53.1241 47.8007 46.0949 50.2421C45.3708 50.4942 44.5804 50.7623 43.7453 51.0482C42.9102 51.3341 42.0678 51.7059 41.1726 52.0624C40.2882 52.4198 39.3698 52.7959 38.4298 53.1702C37.4997 53.5561 36.5847 54.0191 35.6617 54.4489C34.7378 54.8894 33.8139 55.3298 32.9124 55.7615C32.0287 56.2378 31.1664 56.716 30.3275 57.1746C29.4876 57.6439 28.6826 58.0838 27.9216 58.5165C27.1899 58.9842 26.4924 59.4331 25.8521 59.8437C24.7631 60.5729 23.6232 61.2653 22.5306 62.0375C21.4487 62.8106 20.3579 63.5613 19.2726 64.2476C18.0083 65.0052 16.9629 65.8571 15.9939 66.5749C15.0337 67.3151 14.1685 67.9552 13.4662 68.5875C12.0812 69.8754 11.1402 70.8984 10.6533 71.6679C9.66865 73.206 10.4793 73.718 12.8432 73.5078C13.8775 73.4226 13.6878 74.6391 16.016 73.1933C16.1073 73.1362 16.3016 73.0122 16.3921 72.9658C18.2177 71.9639 20.0523 70.9844 21.7708 69.8437C23.5759 68.8292 25.2738 67.6761 27.0424 66.5828C30.5767 64.4286 34.1291 62.1895 37.9821 60.4839C56.7124 51.8893 78.1821 49.1057 98.3117 53.3223C118.439 57.5604 137.103 68.4746 150.834 83.7595C155.042 88.4411 158.825 93.5516 162.022 98.9367C163.455 101.415 164.514 104.23 165.034 107.009C165.274 108.392 165.384 109.774 165.317 111.066C165.21 112.332 164.917 113.486 164.43 114.385C163.943 115.284 163.293 115.932 162.348 116.371C161.412 116.821 160.443 117.031 159.501 116.918C157.578 116.647 155.332 115.094 153.56 112.911C151.741 110.778 150.267 108.145 149.166 105.446L148.767 104.418L148.365 103.291L147.594 101.042C147.094 99.5402 146.649 98.0429 146.235 96.5482C144.469 89.9656 143.887 83.3212 145.016 77.0275L144.996 77.1341C145.727 73.8662 146.874 70.6768 148.664 67.8016C149.429 66.2989 150.557 64.9891 151.508 63.5887L153.196 61.6562C153.483 61.3346 153.749 61.0004 154.046 60.6904L156.742 58.0975L158.657 56.5517L159.621 55.7687L160.653 55.0671L162.708 53.663C165.576 51.9711 168.534 50.3627 171.711 49.2269C174.835 47.9676 178.125 47.1549 181.424 46.5051C183.085 46.3001 184.737 45.943 186.417 45.891L188.918 45.7248L192.745 45.7253L194.025 45.8014L196.575 45.9423C198.275 46.1622 199.975 46.2632 201.657 46.5681L204.185 46.9773L206.693 47.4929C208.363 47.8076 210.02 48.2834 211.673 48.6831C218.269 50.4538 224.649 52.8548 230.839 55.4667C231.801 55.8511 233.06 56.5525 234.477 57.1809Z"
                fill="white"
              />
              <path
                d="M25.2208 73.1536C25.9502 73.1095 28.5378 72.9746 30.182 72.7085C33.9827 72.1234 37.7172 71.3322 41.604 70.9186C42.2096 70.8499 43.196 70.5693 43.8135 72.6049C44.4534 74.7221 44.1283 76.1676 43.0245 76.4121C40.3395 76.9738 37.5826 77.0966 35.0095 77.9592C31.2132 79.2358 27.2063 79.3896 23.2689 79.6902C21.4867 79.8088 19.7142 79.8564 17.9284 79.8199C17.038 79.8107 16.1491 79.7719 15.2562 79.7536C14.3442 79.7015 13.534 79.6996 12.5098 79.6296C11.6044 79.566 10.6089 79.4588 9.48026 79.115C8.91469 78.9385 8.32015 78.692 7.73197 78.3266C7.14628 77.9703 6.5504 77.4704 6.07411 76.9085C4.98505 75.6073 4.5459 74.079 4.38872 72.9025C4.21909 71.6806 4.26032 70.6936 4.3042 69.8229C4.47726 66.8288 5.42203 63.9447 6.23823 61.1252C6.42605 60.4589 6.23633 59.5548 6.46613 58.8282C6.65076 58.2214 6.96107 57.219 7.31827 56.6721C7.47712 56.4334 7.65903 56.2078 7.66185 55.9338C7.70339 54.6637 8.53352 54.6309 10.6992 55.8023C11.18 56.0606 11.8701 56.1931 12.1298 56.5706C12.1439 56.5862 12.163 56.62 12.177 56.6357C13.3056 57.8674 12.4235 58.4218 12.2252 59.2276C11.2723 63.1482 10.6694 67.2068 10.6194 71.1819C10.5908 72.3216 10.8017 73.054 10.943 73.142C11.0248 73.2269 11.1223 73.2977 11.4031 73.3962C11.6813 73.4857 12.0776 73.5427 12.5661 73.5452C13.105 73.5533 13.7217 73.2767 14.4276 73.5024L14.416 73.4958C15.1479 73.4607 15.8831 73.3662 16.6002 73.3839C19.3442 73.4988 22.2031 73.2505 24.8422 73.2673C24.9313 73.2721 25.0682 73.1663 25.2208 73.1536Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-nowrap w-[86%] overflow-hidden ">
            <div className="animated-roles">
              {roles.map(role => {
                return (
                  <Role
                    name={role}
                    key={role.replace(/\s/g, "-").toLowerCase()}
                  />
                );
              })}
            </div>
            <div className="animated-roles" aria-hidden="true">
              {roles.map(role => {
                return (
                  <Role
                    name={role}
                    key={role.replace(/\s/g, "-").toLowerCase()}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative mt-8 ">
          <div className=" absolute translate-y-[-34%]  left-0 ">
            <svg
              width="230"
              height="124"
              viewBox="0 0 230 124"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-2.55989 75.1558C-4.2788 74.4904 -7.10342 73.371 -10.5886 71.9309C-14.0816 70.442 -18.259 68.6698 -22.7095 66.7745C-31.628 62.9151 -41.9202 58.75 -50.319 56.1127C-59.9843 53.0019 -70.2425 50.7748 -80.7651 50.4192L-82.7364 50.3582C-83.3935 50.3378 -84.0547 50.3849 -84.7028 50.3941L-88.6385 50.5142C-89.955 50.5121 -91.252 50.7241 -92.5547 50.8486L-96.4552 51.2806L-100.297 51.9872C-101.565 52.2493 -102.869 52.4125 -104.111 52.7826L-107.862 53.7658C-108.477 53.9416 -109.122 54.0768 -109.728 54.2822L-111.546 54.8982C-121.3 58.0834 -130.299 62.6985 -138.495 68.1268C-146.672 73.5951 -154.034 79.8772 -160.734 86.6156C-162.867 88.6936 -165.591 91.6263 -167.547 94.1603C-169.441 96.7464 -170.585 98.9035 -169.554 99.5079C-167.343 100.784 -162.07 96.5822 -154.914 89.6004C-146.213 81.1729 -136.51 73.4835 -125.585 67.5426C-124.253 66.752 -122.833 66.112 -121.431 65.4223C-120.031 64.752 -118.649 64.0321 -117.18 63.4724C-115.73 62.8825 -114.301 62.272 -112.843 61.7117L-108.382 60.2197C-102.38 58.424 -96.1838 57.1435 -89.9123 56.7677C-80.7424 56.1122 -71.5209 57.2796 -62.541 59.4101C-53.5408 61.5611 -44.7994 64.7806 -36.1509 68.2849C-27.5035 71.8084 -18.9439 75.7139 -10.1172 79.3063C-1.28874 82.8699 7.77893 86.2252 17.3223 88.4961C21.6001 89.5001 25.9625 90.3543 30.39 90.8447C34.8182 91.3254 39.3062 91.5291 43.7949 91.3649C48.3415 91.1365 52.8402 90.4502 57.1902 89.3678C61.5228 88.2165 65.7078 86.6499 69.6778 84.712C73.6179 82.7336 77.3041 80.314 80.6456 77.5251C83.9872 74.7361 86.8107 71.4124 89.0699 67.7837C89.5906 66.8472 90.1949 65.9545 90.6313 64.9839L91.8988 62.0502C92.5284 60.0265 93.2231 57.9971 93.4368 55.8902C94.1648 51.7042 93.7739 47.4602 92.9484 43.4417C92.1418 39.6469 90.894 36.0094 89.466 32.4965C88.7305 30.7387 88.0554 29.0524 87.0682 27.1729C86.1093 25.3629 85.0058 23.6216 83.6594 21.9721C82.3237 20.3232 80.7898 18.7399 78.8775 17.3465C76.9855 15.9738 74.6224 14.7178 71.7337 14.3011C70.3117 14.0796 68.7969 14.1429 67.3667 14.4146C66.6471 14.5356 65.9946 14.7962 65.3235 15.0073C64.6518 15.2281 64.0581 15.5889 63.4242 15.8991C62.801 16.2099 62.2641 16.7001 61.6996 17.1112C61.1549 17.5526 60.7226 18.0975 60.2491 18.611C59.8389 19.1476 59.5017 19.7274 59.1543 20.2968C58.9036 20.8721 58.6411 21.4661 58.4329 22.0536C57.6969 24.4096 57.7104 26.6852 57.9924 28.8027C58.296 30.9215 58.9088 32.9235 59.7097 34.8498C60.5117 36.7568 61.5312 38.6382 62.7439 40.357C63.9223 41.9286 65.0334 43.5446 66.2685 45.0712C71.1847 51.2246 76.9655 56.8205 83.4048 61.7012C94.5073 70.1355 107.562 76.4423 121.446 80.1083C135.339 83.8038 150.064 84.6168 164.214 82.8201C170.878 82.0131 178.93 80.748 185.879 78.4482C186.595 78.2108 187.377 77.9579 188.202 77.6884C189.028 77.4189 189.858 77.0723 190.742 76.7385C191.615 76.4041 192.521 76.0524 193.449 75.7019C194.366 75.3412 195.267 74.9116 196.176 74.5116C197.085 74.102 197.995 73.6925 198.883 73.2912C199.751 72.8501 200.598 72.4076 201.423 71.9832C202.247 71.5491 203.038 71.1419 203.786 70.7418C204.502 70.3109 205.186 69.8972 205.813 69.5189C206.879 68.8477 207.997 68.2088 209.065 67.499C210.122 66.7886 211.189 66.098 212.253 65.4654C213.493 64.766 214.512 63.9855 215.458 63.3264C216.395 62.6474 217.24 62.0597 217.922 61.4815C219.267 60.3044 220.176 59.372 220.639 58.674C221.576 57.2788 220.75 56.8321 218.395 57.0575C217.364 57.15 217.516 56.0557 215.234 57.389C215.145 57.4416 214.954 57.5559 214.865 57.599C213.072 58.5262 211.268 59.4336 209.586 60.4838C207.813 61.422 206.152 62.483 204.418 63.4913C200.952 65.479 197.471 67.5432 193.673 69.1333C175.22 77.1357 153.853 79.9673 133.612 76.4977C113.371 73.0088 94.39 63.5076 80.205 50.0083C75.8575 45.8736 71.9222 41.3476 68.5635 36.566C67.0562 34.3647 65.9128 31.8564 65.3076 29.3708C65.0262 28.1342 64.8745 26.8957 64.9015 25.7358C64.9703 24.5978 65.2274 23.5582 65.6867 22.7439C66.1461 21.9295 66.7754 21.3384 67.7066 20.9301C68.6277 20.5115 69.5897 20.3083 70.5342 20.3945C72.4639 20.608 74.7561 21.9662 76.5928 23.897C78.4753 25.7822 80.0283 28.1217 81.2104 30.526L81.6406 31.4425L82.0763 32.4465L82.9155 34.4526C83.4605 35.7923 83.9516 37.1287 84.4106 38.4631C86.3755 44.3413 87.1596 50.2934 86.2235 55.9574L86.2401 55.8615C85.6088 58.8047 84.5606 61.6839 82.8596 64.2913C82.1406 65.6514 81.054 66.8441 80.1462 68.1153L78.518 69.8753C78.2413 70.1684 77.9855 70.4723 77.6986 70.755L75.084 73.1233L73.2176 74.5398L72.2784 75.2574L71.2681 75.9029L69.2582 77.1946C66.4441 78.7571 63.5372 80.2462 60.3968 81.3146C57.3145 82.4931 54.0512 83.2734 50.7752 83.9078C49.1221 84.1176 47.4823 84.4637 45.8051 84.5365L43.3115 84.7245L39.4875 84.7837L38.2061 84.7353L35.6536 84.6486C33.9479 84.4777 32.2467 84.4136 30.5564 84.1662L28.0185 83.8385L25.4971 83.415C23.8182 83.1586 22.1481 82.7576 20.4846 82.4247C13.8401 80.9388 7.39182 78.884 1.12787 76.6371C0.154927 76.3072 -1.12489 75.6975 -2.55989 75.1558Z"
                fill="white"
              />
              <path
                d="M206.019 56.6798C205.29 56.6341 202.705 56.4501 201.041 56.5123C197.197 56.6261 193.394 56.9527 189.486 56.8857C188.876 56.8796 187.863 57.0369 187.5 54.9409C187.125 52.7612 187.625 51.3665 188.75 51.2594C191.484 51.0318 194.235 51.2485 196.895 50.7084C200.819 49.9077 204.815 50.2472 208.759 50.4325C210.542 50.5337 212.307 50.7041 214.075 50.9597C214.958 51.0782 215.835 51.2259 216.719 51.3537C217.618 51.5174 218.422 51.6188 219.429 51.814C220.32 51.9884 221.295 52.2171 222.373 52.6969C222.912 52.9415 223.472 53.2591 224.011 53.694C224.548 54.1195 225.078 54.6888 225.482 55.305C226.403 56.73 226.651 58.3008 226.663 59.4877C226.681 60.7211 226.519 61.6956 226.368 62.5543C225.829 65.5045 224.537 68.2507 223.381 70.9486C223.113 71.5868 223.19 72.5073 222.872 73.2002C222.615 73.7798 222.184 74.7364 221.762 75.2353C221.575 75.4528 221.367 75.6543 221.33 75.9259C221.133 77.1812 220.305 77.1118 218.3 75.6833C217.854 75.368 217.186 75.1517 216.974 74.7451C216.962 74.7279 216.948 74.692 216.936 74.6748C215.967 73.3137 216.91 72.8719 217.206 72.0966C218.633 68.3227 219.73 64.3688 220.268 60.43C220.436 59.3024 220.317 58.5497 220.188 58.4449C220.117 58.3507 220.029 58.2685 219.762 58.1362C219.497 58.0132 219.111 57.9079 218.626 57.8455C218.092 57.7712 217.446 57.97 216.774 57.6593L216.784 57.6673C216.054 57.6122 215.312 57.6157 214.603 57.5101C211.894 57.059 209.026 56.9544 206.409 56.6135C206.321 56.5978 206.172 56.686 206.019 56.6798Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-nowrap overflow-hidden w-[88%] ml-auto">
            <div className="animated-roles reversed">
              {roles.reverse().map(role => {
                return (
                  <Role
                    name={role}
                    key={role.replace(/\s/g, "-").toLowerCase()}
                  />
                );
              })}
            </div>
            <div className="animated-roles reversed" aria-hidden="true">
              {roles.map(role => {
                return (
                  <Role
                    name={role}
                    key={role.replace(/\s/g, "-").toLowerCase()}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Role = ({ name }) => {
  return (
    <Text
      variant="h4"
      as="span"
      className="flex-shrink-0 py-4 px-8 border-2 border-primary-100 inline-block mx-4 rounded-full"
    >
      {name}
    </Text>
  );
};

const roles = [
  "SEO Writer",
  "Product Designer",
  "Product Manager",
  "Virtual Assistant",
  "Motion Designer",
];
