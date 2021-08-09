import styles from './Main.module.scss'

const Main = () => {
  return (
    <section className={styles.main}>
      <article>
        <div>
          <span className={styles.name}>Dimitry</span>
          <span>
            <svg
              className={styles.svgOne}
              xmlns='http://www.w3.org/2000/svg'
              width='90.882'
              height='25.243'
              viewBox='0 0 90.882 25.243'
            >
              <g
                id='Icon_feather-arrow-right'
                data-name='Icon feather-arrow-right'
                transform='translate(-6 -5.379)'
              >
                <path
                  id='Path_1'
                  data-name='Path 1'
                  d='M7.5,18H95.382'
                  transform='translate(0)'
                  fill='none'
                  stroke='#f01818'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='3'
                />
                <path
                  id='Path_2'
                  data-name='Path 2'
                  d='M18,7.5,28.5,18,18,28.5'
                  transform='translate(66.882)'
                  fill='none'
                  stroke='#f01818'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='3'
                />
              </g>
            </svg>
          </span>
        </div>
        <div className={styles.surname}>Rypinski</div>
        <div className={styles.ux}>
          <span>UX</span>
          <span>
            <svg
              className={styles.svgTwo}
              xmlns='http://www.w3.org/2000/svg'
              width='34'
              height='32.134'
              viewBox='0 0 34 32.134'
            >
              <g
                id='Icon_feather-eye'
                data-name='Icon feather-eye'
                transform='translate(-1 0.569)'
              >
                <path
                  id='Path_3'
                  data-name='Path 3'
                  d='M1.5,15.249S7.5,6,18,6s16.5,9.249,16.5,9.249S28.5,24.5,18,24.5,1.5,15.249,1.5,15.249Z'
                  fill='none'
                  stroke='#f01818'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='1'
                />
                <path
                  id='Path_4'
                  data-name='Path 4'
                  d='M22.5,18A4.5,4.5,0,1,1,18,13.5,4.5,4.5,0,0,1,22.5,18Z'
                  transform='translate(0 -2.751)'
                  fill='none'
                  stroke='#f01818'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='1'
                />
                <path
                  id='Path_5'
                  data-name='Path 5'
                  d='M16.9,15.2a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,16.9,15.2Z'
                  transform='translate(2.8 0.049)'
                  fill='none'
                  stroke='#f01818'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='1'
                />
              </g>
              <line
                id='Line_1'
                data-name='Line 1'
                y2='4.077'
                transform='translate(16 28.057)'
                fill='none'
                stroke='#f01818'
                stroke-width='1'
              />
              <line
                id='Line_4'
                data-name='Line 4'
                y1='3.485'
                transform='translate(17)'
                fill='none'
                stroke='#f01818'
                stroke-width='1'
              />
              <line
                id='Line_3'
                data-name='Line 3'
                x1='0.827'
                y2='3.688'
                transform='translate(10 27.256)'
                fill='none'
                stroke='#f01818'
                stroke-width='1'
              />
              <line
                id='Line_6'
                data-name='Line 6'
                y1='3.096'
                x2='0.827'
                transform='translate(22.173 1.19)'
                fill='none'
                stroke='#f01818'
                stroke-width='1'
              />
              <line
                id='Line_2'
                data-name='Line 2'
                x2='0.827'
                y2='3.688'
                transform='translate(21.173 27.256)'
                fill='none'
                stroke='#f01818'
                stroke-width='1'
              />
              <line
                id='Line_5'
                data-name='Line 5'
                x1='0.827'
                y1='3.096'
                transform='translate(11 1.19)'
                fill='none'
                stroke='#f01818'
                stroke-width='1'
              />
            </svg>
          </span>
          <span>UI</span>
          <div>
            <span className={styles.line}></span>
          </div>
          <span className={styles.designer}>
            <div></div>
            <p>Designer</p>
          </span>
        </div>
      </article>
    </section>
  )
}

export default Main
