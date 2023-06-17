import React from 'react'
import { Link } from 'react-router-dom'

import styles from './pembayaran.module.css'
import styles from './detail-transaksi.module.css'
import styles from './payment-done.module.css'
import styles from './payment-failed.module.css'
import styles from './transaction-history.module.css'

const DetailTransaksi = (props) => {
    return (
      <div className={styles['container']}>
        <div className={styles['detail-transaksi']}>
          <img
            src="/rectangle12271-sj3-200h.png"
            alt="Rectangle12271"
            className={styles['rectangle1']}
          />
          <span className={styles['text']}>
            <span>Konfirmasi Pembayaran</span>
          </span>
          <span className={styles['text02']}>
            <span>Shopee</span>
          </span>
          <img
            src="/rectangle32271-kqn-600h.png"
            alt="Rectangle32271"
            className={styles['rectangle3']}
          />
          <span className={styles['text04']}>
            <span>Pembayaran</span>
          </span>
          <span className={styles['text06']}>
            <span>Lihat Detail</span>
          </span>
          <div className={styles['group1']}>
            <span className={styles['text08']}>
              <span>Rp</span>
            </span>
            <span className={styles['text10']}>
              <span>200.000</span>
            </span>
          </div>
          <img
            src="/line12271-gp1.svg"
            alt="Line12271"
            className={styles['line1']}
          />
          <div className={styles['group15']}>
            <img
              src="/ellipse102271-e6tk-200h.png"
              alt="Ellipse102271"
              className={styles['ellipse10']}
            />
            <div className={styles['group14']}>
              <img
                src="/vector2271-njyn.svg"
                alt="Vector2271"
                className={styles['vector']}
              />
              <img
                src="/vector2271-02ae.svg"
                alt="Vector2271"
                className={styles['vector1']}
              />
              <img
                src="/vector2271-7m19.svg"
                alt="Vector2271"
                className={styles['vector2']}
              />
              <img
                src="/vector2271-fnhu.svg"
                alt="Vector2271"
                className={styles['vector3']}
              />
              <img
                src="/vector2271-rpw9.svg"
                alt="Vector2271"
                className={styles['vector4']}
              />
              <img
                src="/vector2271-edo7.svg"
                alt="Vector2271"
                className={styles['vector5']}
              />
              <img
                src="/vector2271-6bsl.svg"
                alt="Vector2271"
                className={styles['vector6']}
              />
              <img
                src="/vector2271-23ca.svg"
                alt="Vector2271"
                className={styles['vector7']}
              />
              <img
                src="/vector2271-uzefb.svg"
                alt="Vector2271"
                className={styles['vector8']}
              />
            </div>
          </div>
          <img
            src="/rectangle22271-zqhv-1400w.png"
            alt="Rectangle22271"
            className={styles['rectangle2']}
          />
          <span className={styles['text12']}>
            <span>OVO Cash</span>
          </span>
          <span className={styles['text14']}>
            <span>Rp200.000</span>
          </span>
          <div className={styles['group2']}>
            <span className={styles['text16']}>
              <span>Total Bayar</span>
            </span>
            <span className={styles['text18']}>
              <span>Rp200.000</span>
            </span>
          </div>
          <img
            src="/rectangle42271-egur-200h.png"
            alt="Rectangle42271"
            className={styles['rectangle4']}
          />
          <span className={styles['text20']}>
            <span>Bayar</span>
          </span>
          <img
            src="/ellipse32271-9hr-200h.png"
            alt="Ellipse32271"
            className={styles['ellipse3']}
          />
          <img
            src="/ellipse22271-o3t.svg"
            alt="Ellipse22271"
            className={styles['ellipse2']}
          />
          <span className={styles['text22']}>
            <span>Metode Pembayaran</span>
          </span>
          <img
            src="/rectangle52271-5bfc-200h.png"
            alt="Rectangle52271"
            className={styles['rectangle5']}
          />
          <span className={styles['text24']}>
            <span>_ _ _ _ _ _</span>
          </span>
          <span className={styles['text26']}>
            <span>Masukkan PIN Anda:</span>
          </span>
          <span className={styles['text28']}>
            <span>Merchant</span>
          </span>
          <img
            src="/rectangle162272-torf-1100h.png"
            alt="Rectangle162272"
            className={styles['rectangle16']}
          />
          <img
            src="/rectangle82272-nics-1400w.png"
            alt="Rectangle82272"
            className={styles['rectangle8']}
          />
          <Link to="/pembayaran" className={styles['navlink']}>
            <img
              src="/makicross2272-ndii.svg"
              alt="makicross2272"
              className={styles['makicross']}
            />
          </Link>
          <div className={styles['group21']}>
            <img
              src="/rectangle172272-xec-200h.png"
              alt="Rectangle172272"
              className={styles['rectangle17']}
            />
            <span className={styles['text30']}>
              <span>081236127458</span>
            </span>
          </div>
          <div className={styles['group24']}>
            <img
              src="/rectangle172272-8cu4-200h.png"
              alt="Rectangle172272"
              className={styles['rectangle171']}
            />
            <span className={styles['text32']}>
              <span>Azka Tsawaab Dhafin</span>
            </span>
          </div>
          <span className={styles['text34']}>
            <span>Phone Number</span>
          </span>
          <span className={styles['text36']}>
            <span>Username</span>
          </span>
          <div className={styles['group22']}>
            <img
              src="/rectangle172272-lyzc-200h.png"
              alt="Rectangle172272"
              className={styles['rectangle172']}
            />
            <span className={styles['text38']}>
              <span>Rp200.000</span>
            </span>
          </div>
          <span className={styles['text40']}>
            <span>Total Payment</span>
          </span>
          <div className={styles['group23']}>
            <img
              src="/rectangle172272-3l1e-200h.png"
              alt="Rectangle172272"
              className={styles['rectangle173']}
            />
            <span className={styles['text42']}>11 Apr 2023, 13:50</span>
          </div>
          <span className={styles['text43']}>
            <span>Date of Transaction</span>
          </span>
          <span className={styles['text45']}>
            <span>Lihat Detail</span>
          </span>
        </div>
      </div>
      const PaymentDone = (props) => {
        return (
          <div className={styles['container']}>
            <div className={styles['payment-done']}>
              <img
                src="/rectangle1142-0nj-200h.png"
                alt="Rectangle1142"
                className={styles['rectangle1']}
              />
              <span className={styles['text']}>
                <span>Konfirmasi Pembayaran</span>
              </span>
              <span className={styles['text02']}>
                <span>E-Commerce</span>
              </span>
              <img
                src="/rectangle3145-rzr-600h.png"
                alt="Rectangle3145"
                className={styles['rectangle3']}
              />
              <span className={styles['text04']}>
                <span>Pembayaran</span>
              </span>
              <div className={styles['group1']}>
                <span className={styles['text06']}>
                  <span>Rp</span>
                </span>
                <span className={styles['text08']}>
                  <span>200.000</span>
                </span>
              </div>
              <img
                src="/line11410-alrw.svg"
                alt="Line11410"
                className={styles['line1']}
              />
              <img
                src="/ellipse11411-fhpt-200h.png"
                alt="Ellipse11411"
                className={styles['ellipse1']}
              />
              <img
                src="/rectangle21412-aq3-1400w.png"
                alt="Rectangle21412"
                className={styles['rectangle2']}
              />
              <span className={styles['text10']}>
                <span>OVO Cash</span>
              </span>
              <span className={styles['text12']}>
                <span>Rp200.000</span>
              </span>
              <div className={styles['group2']}>
                <span className={styles['text14']}>
                  <span>Total Bayar</span>
                </span>
                <span className={styles['text16']}>
                  <span>Rp200.000</span>
                </span>
              </div>
              <img
                src="/vector1418-60no.svg"
                alt="Vector1418"
                className={styles['vector']}
              />
              <img
                src="/rectangle41419-m3hm-200h.png"
                alt="Rectangle41419"
                className={styles['rectangle4']}
              />
              <span className={styles['text18']}>
                <span>Bayar</span>
              </span>
              <span className={styles['text20']}>
                <span>Metode Pembayaran</span>
              </span>
              <img
                src="/rectangle51422-pbx-200h.png"
                alt="Rectangle51422"
                className={styles['rectangle5']}
              />
              <span className={styles['text22']}>
                <span>Pakai Semua 1.024 OVO Points</span>
              </span>
              <img
                src="/rectangle61424-qahl-200h.png"
                alt="Rectangle61424"
                className={styles['rectangle6']}
              />
              <img
                src="/blur1427-0t3e-1100h.png"
                alt="Blur1427"
                className={styles['blur']}
              />
              <img
                src="/rectangle81428-r9j2-1400w.png"
                alt="Rectangle81428"
                className={styles['rectangle8']}
              />
              <div className={styles['group5']}>
                <img
                  src="/ellipse41429-j2ga.svg"
                  alt="Ellipse41429"
                  className={styles['ellipse4']}
                />
                <img
                  src="/ellipse51430-wp9-200h.png"
                  alt="Ellipse51430"
                  className={styles['ellipse5']}
                />
                <img
                  src="/ellipse61432-6g2.svg"
                  alt="Ellipse61432"
                  className={styles['ellipse6']}
                />
                <div className={styles['frameiconcheckmarkoutline']}>
                  <img
                    src="/vector1435-pwlr.svg"
                    alt="Vector1435"
                    className={styles['vector01']}
                  />
                </div>
              </div>
              <span className={styles['text24']}>
                <span>Berhasil</span>
              </span>
              <span className={styles['text26']}>
                <span>11 Apr 2023, 13:50</span>
              </span>
              <div className={styles['group3']}>
                <span className={styles['text28']}>
                  <span>Payment ID :</span>
                </span>
                <span className={styles['text30']}>
                  <span>#031391</span>
                </span>
              </div>
              <div className={styles['group4']}>
                <span className={styles['text32']}>
                  <span>Rp</span>
                </span>
                <div className={styles['group19']}>
                  <div className={styles['group16']}>
                    <span className={styles['text34']}>
                      <span>Balance left:</span>
                    </span>
                  </div>
                  <div className={styles['group18']}>
                    <div className={styles['group17']}>
                      <span className={styles['text36']}>
                        <span>250.000</span>
                      </span>
                    </div>
                    <span className={styles['text38']}>
                      <span>Rp</span>
                    </span>
                  </div>
                </div>
                <span className={styles['text40']}>
                  <span>200.000</span>
                </span>
              </div>
              <span className={styles['text42']}>
                <span>Shopee</span>
              </span>
              <span className={styles['text44']}>
                <span>Merchant</span>
              </span>
              <Link to="/transaction-history" className={styles['navlink']}>
                <div className={styles['group6']}>
                  <span className={styles['text46']}>
                    <span>Done</span>
                  </span>
                </div>
              </Link>
              <div className={styles['frameiconcontentcopy']}>
                <img
                  src="/vector1455-oyq9.svg"
                  alt="Vector1455"
                  className={styles['vector02']}
                />
              </div>
              <div className={styles['group15']}>
                <img
                  src="/ellipse102207-aik-200w.png"
                  alt="Ellipse102207"
                  className={styles['ellipse10']}
                />
                <div className={styles['group14']}>
                  <img
                    src="/vector2207-rfvl.svg"
                    alt="Vector2207"
                    className={styles['vector03']}
                  />
                  <img
                    src="/vector2207-wq2.svg"
                    alt="Vector2207"
                    className={styles['vector04']}
                  />
                  <img
                    src="/vector2207-r5oa.svg"
                    alt="Vector2207"
                    className={styles['vector05']}
                  />
                  <img
                    src="/vector2207-4nyg.svg"
                    alt="Vector2207"
                    className={styles['vector06']}
                  />
                  <img
                    src="/vector2208-9r38.svg"
                    alt="Vector2208"
                    className={styles['vector07']}
                  />
                  <img
                    src="/vector2208-7pbi.svg"
                    alt="Vector2208"
                    className={styles['vector08']}
                  />
                  <img
                    src="/vector2208-zoyi.svg"
                    alt="Vector2208"
                    className={styles['vector09']}
                  />
                  <img
                    src="/vector2208-xtn.svg"
                    alt="Vector2208"
                    className={styles['vector10']}
                  />
                  <img
                    src="/vector2208-j12.svg"
                    alt="Vector2208"
                    className={styles['vector11']}
                  />
                </div>
              </div>
              <img
                src="/line72209-sbh.svg"
                alt="Line72209"
                className={styles['line7']}
              />
            </div>
          </div>
          const PaymentFailed = (props) => {
            return (
              <div className={styles['container']}>
                <div className={styles['payment-failed']}>
                  <img
                    src="/rectangle12193-yev-200h.png"
                    alt="Rectangle12193"
                    className={styles['rectangle1']}
                  />
                  <span className={styles['text']}>
                    <span>Konfirmasi Pembayaran</span>
                  </span>
                  <span className={styles['text02']}>
                    <span>E-Commerce</span>
                  </span>
                  <img
                    src="/rectangle32196-r9rh-600h.png"
                    alt="Rectangle32196"
                    className={styles['rectangle3']}
                  />
                  <span className={styles['text04']}>
                    <span>Pembayaran</span>
                  </span>
                  <div className={styles['group1']}>
                    <span className={styles['text06']}>
                      <span>Rp</span>
                    </span>
                    <span className={styles['text08']}>
                      <span>200.000</span>
                    </span>
                  </div>
                  <img
                    src="/line12191-k6kc.svg"
                    alt="Line12191"
                    className={styles['line1']}
                  />
                  <img
                    src="/ellipse12191-5ewy-200h.png"
                    alt="Ellipse12191"
                    className={styles['ellipse1']}
                  />
                  <img
                    src="/rectangle22191-3yyg-1400w.png"
                    alt="Rectangle22191"
                    className={styles['rectangle2']}
                  />
                  <span className={styles['text10']}>
                    <span>OVO Cash</span>
                  </span>
                  <span className={styles['text12']}>
                    <span>Rp200.000</span>
                  </span>
                  <div className={styles['group2']}>
                    <span className={styles['text14']}>
                      <span>Total Bayar</span>
                    </span>
                    <span className={styles['text16']}>
                      <span>Rp200.000</span>
                    </span>
                  </div>
                  <img
                    src="/vector2191-xd2r.svg"
                    alt="Vector2191"
                    className={styles['vector']}
                  />
                  <img
                    src="/rectangle42192-62ei-200h.png"
                    alt="Rectangle42192"
                    className={styles['rectangle4']}
                  />
                  <span className={styles['text18']}>
                    <span>Bayar</span>
                  </span>
                  <span className={styles['text20']}>
                    <span>Metode Pembayaran</span>
                  </span>
                  <img
                    src="/rectangle52192-2bb-200h.png"
                    alt="Rectangle52192"
                    className={styles['rectangle5']}
                  />
                  <img
                    src="/rectangle62192-yet-200h.png"
                    alt="Rectangle62192"
                    className={styles['rectangle6']}
                  />
                  <img
                    src="/blur2192-md2-1100h.png"
                    alt="Blur2192"
                    className={styles['blur']}
                  />
                  <img
                    src="/rectangle82192-0qx-1400w.png"
                    alt="Rectangle82192"
                    className={styles['rectangle8']}
                  />
                  <div className={styles['group5']}>
                    <img
                      src="/ellipse42192-2z4.svg"
                      alt="Ellipse42192"
                      className={styles['ellipse4']}
                    />
                    <img
                      src="/ellipse52193-omgc-200h.png"
                      alt="Ellipse52193"
                      className={styles['ellipse5']}
                    />
                    <img
                      src="/ellipse62193-84i9.svg"
                      alt="Ellipse62193"
                      className={styles['ellipse6']}
                    />
                    <div className={styles['frameiconcheckmarkoutline']}></div>
                  </div>
                  <span className={styles['text22']}>
                    <span>Gagal</span>
                  </span>
                  <span className={styles['text24']}>
                    <span>11 Apr 2023, 13:50</span>
                  </span>
                  <div className={styles['group4']}>
                    <span className={styles['text26']}>
                      <span>Rp</span>
                    </span>
                    <span className={styles['text28']}>
                      <span>200.000</span>
                    </span>
                  </div>
                  <div className={styles['group6']}>
                    <span className={styles['text30']}>
                      <span>Back</span>
                    </span>
                  </div>
                  <img
                    src="/makicross2195-nevg.svg"
                    alt="makicross2195"
                    className={styles['makicross']}
                  />
                  <div className={styles['group19']}>
                    <div className={styles['group16']}>
                      <span className={styles['text32']}>
                        <span>Balance left:</span>
                      </span>
                    </div>
                    <div className={styles['group18']}>
                      <div className={styles['group17']}>
                        <span className={styles['text34']}>
                          <span>450.000</span>
                        </span>
                      </div>
                      <span className={styles['text36']}>
                        <span>Rp</span>
                      </span>
                    </div>
                  </div>
                  <span className={styles['text38']}>
                    <span>Shopee</span>
                  </span>
                  <span className={styles['text40']}>
                    <span>Merchant</span>
                  </span>
                  <div className={styles['group15']}>
                    <img
                      src="/ellipse102201-pxk-200w.png"
                      alt="Ellipse102201"
                      className={styles['ellipse10']}
                    />
                    <div className={styles['group14']}>
                      <img
                        src="/vector2201-ircs.svg"
                        alt="Vector2201"
                        className={styles['vector01']}
                      />
                      <img
                        src="/vector2201-isg.svg"
                        alt="Vector2201"
                        className={styles['vector02']}
                      />
                      <img
                        src="/vector2201-g5d.svg"
                        alt="Vector2201"
                        className={styles['vector03']}
                      />
                      <img
                        src="/vector2201-w91a.svg"
                        alt="Vector2201"
                        className={styles['vector04']}
                      />
                      <img
                        src="/vector2201-741d.svg"
                        alt="Vector2201"
                        className={styles['vector05']}
                      />
                      <img
                        src="/vector2201-p1tk.svg"
                        alt="Vector2201"
                        className={styles['vector06']}
                      />
                      <img
                        src="/vector2201-10r2.svg"
                        alt="Vector2201"
                        className={styles['vector07']}
                      />
                      <img
                        src="/vector2201-y8be.svg"
                        alt="Vector2201"
                        className={styles['vector08']}
                      />
                      <img
                        src="/vector2201-2eoe.svg"
                        alt="Vector2201"
                        className={styles['vector09']}
                      />
                    </div>
                  </div>
                  <img
                    src="/line72201-zjqr.svg"
                    alt="Line72201"
                    className={styles['line7']}
                  />
                </div>
              </div>
              const Pembayaran = (props) => {
                return (
                  <div className={styles['container']}>
                    <div className={styles['pembayaran']}>
                      <img
                        src="/rectangle182-x3a-200h.png"
                        alt="Rectangle182"
                        className={styles['rectangle1']}
                      />
                      <span className={styles['text']}>
                        <span>Konfirmasi Pembayaran</span>
                      </span>
                      <span className={styles['text02']}>
                        <span>Shopee</span>
                      </span>
                      <img
                        src="/rectangle3815-czjc-600h.png"
                        alt="Rectangle3815"
                        className={styles['rectangle3']}
                      />
                      <span className={styles['text04']}>
                        <span>Pembayaran</span>
                      </span>
                      <Link to="/detail-transaksi" className={styles['text06']}>
                        <span>Lihat Detail</span>
                      </Link>
                      <div className={styles['group1']}>
                        <span className={styles['text08']}>
                          <span>Rp</span>
                        </span>
                        <span className={styles['text10']}>
                          <span>200.000</span>
                        </span>
                      </div>
                      <img
                        src="/line184-reqn.svg"
                        alt="Line184"
                        className={styles['line1']}
                      />
                      <div className={styles['group15']}>
                        <img
                          src="/ellipse102022-y4ui-200h.png"
                          alt="Ellipse102022"
                          className={styles['ellipse10']}
                        />
                        <div className={styles['group14']}>
                          <img
                            src="/vector2021-bdr.svg"
                            alt="Vector2021"
                            className={styles['vector']}
                          />
                          <img
                            src="/vector2021-d3y8.svg"
                            alt="Vector2021"
                            className={styles['vector1']}
                          />
                          <img
                            src="/vector2021-b1fo.svg"
                            alt="Vector2021"
                            className={styles['vector2']}
                          />
                          <img
                            src="/vector2021-957m.svg"
                            alt="Vector2021"
                            className={styles['vector3']}
                          />
                          <img
                            src="/vector2021-h7rv.svg"
                            alt="Vector2021"
                            className={styles['vector4']}
                          />
                          <img
                            src="/vector2021-7f25.svg"
                            alt="Vector2021"
                            className={styles['vector5']}
                          />
                          <img
                            src="/vector2021-ebm7.svg"
                            alt="Vector2021"
                            className={styles['vector6']}
                          />
                          <img
                            src="/vector2022-el3o.svg"
                            alt="Vector2022"
                            className={styles['vector7']}
                          />
                          <img
                            src="/vector2022-m66v.svg"
                            alt="Vector2022"
                            className={styles['vector8']}
                          />
                        </div>
                      </div>
                      <img
                        src="/rectangle2813-c74o-1400w.png"
                        alt="Rectangle2813"
                        className={styles['rectangle2']}
                      />
                      <span className={styles['text12']}>
                        <span>OVO Cash</span>
                      </span>
                      <span className={styles['text14']}>
                        <span>Rp200.000</span>
                      </span>
                      <div className={styles['group2']}>
                        <Link to="/payment-failed" className={styles['navlink']}>
                          <div className={styles['container1']}>
                            <span className={styles['text16']}>
                              <span>Total Bayar</span>
                            </span>
                            <span className={styles['text18']}>
                              <span>Rp200.000</span>
                            </span>
                          </div>
                        </Link>
                      </div>
                      <Link to="/payment-done" className={styles['navlink1']}>
                        <img
                          src="/rectangle4817-hw6a-200h.png"
                          alt="Rectangle4817"
                          className={styles['rectangle4']}
                        />
                      </Link>
                      <span className={styles['text20']}>
                        <span>Bayar</span>
                      </span>
                      <img
                        src="/ellipse3822-1i68-200h.png"
                        alt="Ellipse3822"
                        className={styles['ellipse3']}
                      />
                      <img
                        src="/ellipse2821-ms9j.svg"
                        alt="Ellipse2821"
                        className={styles['ellipse2']}
                      />
                      <span className={styles['text22']}>
                        <span>Metode Pembayaran</span>
                      </span>
                      <img
                        src="/rectangle5105-vm0e-200h.png"
                        alt="Rectangle5105"
                        className={styles['rectangle5']}
                      />
                      <Link to="/payment-failed" className={styles['text24']}>
                        <span>_ _ _ _ _ _</span>
                      </Link>
                      <span className={styles['text26']}>
                        <span>Masukkan PIN Anda:</span>
                      </span>
                      <span className={styles['text28']}>
                        <span>Merchant</span>
                      </span>
                    </div>
                  </div>
                    </div>
                  </div>
                  const TransactionHistory = (props) => {
                    return (
                      <div className={styles['container']}>
                        <div className={styles['transaction-history']}>
                          <img
                            src="/rectangle1222-xyfg-200h.png"
                            alt="Rectangle1222"
                            className={styles['rectangle1']}
                          />
                          <span className={styles['text']}>
                            <span>History</span>
                          </span>
                          <img
                            src="/line12210-o6yc.svg"
                            alt="Line12210"
                            className={styles['line1']}
                          />
                          <span className={styles['text02']}>
                            <span>Shopee</span>
                          </span>
                          <span className={styles['text04']}>
                            <span>11 Apr 2023</span>
                          </span>
                          <span className={styles['text06']}>
                            <span>Pembayaran</span>
                          </span>
                          <span className={styles['text08']}>
                            <span>-Rp200.000</span>
                          </span>
                          <img
                            src="/line22217-q11o.svg"
                            alt="Line22217"
                            className={styles['line2']}
                          />
                          <span className={styles['text10']}>
                            <span>OVO</span>
                          </span>
                          <span className={styles['text12']}>
                            <span>Rewards</span>
                          </span>
                          <span className={styles['text14']}>
                            <span>+OVO Point 204</span>
                          </span>
                          <img
                            src="/line32221-9t6.svg"
                            alt="Line32221"
                            className={styles['line3']}
                          />
                          <span className={styles['text16']}>
                            <span>Shopee</span>
                          </span>
                          <span className={styles['text18']}>
                            <span>Pembayaran</span>
                          </span>
                          <span className={styles['text20']}>
                            <span>-Rp100.000</span>
                          </span>
                          <img
                            src="/line42258-tl5.svg"
                            alt="Line42258"
                            className={styles['line4']}
                          />
                          <span className={styles['text22']}>
                            <span>OVO</span>
                          </span>
                          <span className={styles['text24']}>
                            <span>07 Mar 2023</span>
                          </span>
                          <span className={styles['text26']}>
                            <span>Rewards</span>
                          </span>
                          <span className={styles['text28']}>
                            <span>+OVO Point 194</span>
                          </span>
                          <img
                            src="/line52263-zrm.svg"
                            alt="Line52263"
                            className={styles['line5']}
                          />
                          <span className={styles['text30']}>
                            <span>Shopee</span>
                          </span>
                          <span className={styles['text32']}>
                            <span>Pembayaran</span>
                          </span>
                          <span className={styles['text34']}>
                            <span>-Rp50.000</span>
                          </span>
                          <img
                            src="/line62271-evjb.svg"
                            alt="Line62271"
                            className={styles['line6']}
                          />
                          <span className={styles['text36']}>
                            <span>Shopee</span>
                          </span>
                          <span className={styles['text38']}>
                            <span>Pembayaran</span>
                          </span>
                          <span className={styles['text40']}>
                            <span>-Rp200.000</span>
                          </span>
                        </div>
                      </div>
    )
  }

export default Pembayaran
export default DetailTransaksi
export default PaymentDone
export default PaymentFailed
export default TransactionHistory