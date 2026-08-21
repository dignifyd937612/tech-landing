"use client";

import { scrollToview } from "../smoothscroll";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#020810] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1180px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-[850px]">
            <p className="mb-5 text-sm font-medium tracking-wide text-[#009EFF]">LEGAL</p>

            <h1 className="text-[42px] leading-[1.1] font-semibold sm:text-[52px] lg:text-[60px]">
              Privacy <span className="text-[#009EFF]">Policy</span>
            </h1>

            <p className="mt-6 max-w-[760px] text-[16px] leading-[1.7] text-white/65 sm:text-[18px]">Your privacy matters to us. This Privacy Policy explains how Dignifyd Tech Pvt Ltd. collects, uses, processes, and protects your personal information when you use our services.</p>

            <p className="mt-6 text-sm text-white/45">Last updated August 19, 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-[#020810]">
        <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr] lg:gap-20">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="mb-5 text-xs font-semibold tracking-wider text-white/40 uppercase">Privacy Policy</p>

                <nav className="w-max min-w-full space-y-3 border-l border-white/10 pl-5">
                  <button onClick={() => scrollToview("information")} className="block w-full text-left text-sm whitespace-nowrap text-white/55 transition hover:text-[#009EFF]">
                    Information We Collect
                  </button>

                  <button onClick={() => scrollToview("processing")} className="block w-full text-left text-sm whitespace-nowrap text-white/55 transition hover:text-[#009EFF]">
                    How We Process Your Information
                  </button>

                  <button onClick={() => scrollToview("legal-basis")} className="block w-full text-left text-sm whitespace-nowrap text-white/55 transition hover:text-[#009EFF]">
                    Legal Bases for Processing
                  </button>

                  <button onClick={() => scrollToview("sharing")} className="block w-full text-left text-sm whitespace-nowrap text-white/55 transition hover:text-[#009EFF]">
                    Sharing Your Personal Information
                  </button>

                  <button onClick={() => scrollToview("cookies")} className="block w-full text-left text-sm whitespace-nowrap text-white/55 transition hover:text-[#009EFF]">
                    Cookies and Tracking Technologies
                  </button>

                  <button onClick={() => scrollToview("retention")} className="block w-full text-left text-sm whitespace-nowrap text-white/55 transition hover:text-[#009EFF]">
                    How Long We Keep Your Information
                  </button>

                  <button onClick={() => scrollToview("security")} className="block w-full text-left text-sm whitespace-nowrap text-white/55 transition hover:text-[#009EFF]">
                    How We Keep Your Information Safe
                  </button>

                  <button onClick={() => scrollToview("minors")} className="block w-full text-left text-sm whitespace-nowrap text-white/55 transition hover:text-[#009EFF]">
                    Information From Minors
                  </button>

                  <button onClick={() => scrollToview("privacy-rights")} className="block w-full text-left text-sm whitespace-nowrap text-white/55 transition hover:text-[#009EFF]">
                    Your Privacy Rights
                  </button>

                  <button onClick={() => scrollToview("do-not-track")} className="block w-full text-left text-sm whitespace-nowrap text-white/55 transition hover:text-[#009EFF]">
                    Do-Not-Track Features
                  </button>

                  <button onClick={() => scrollToview("us-privacy-rights")} className="block w-full text-left text-sm whitespace-nowrap text-white/55 transition hover:text-[#009EFF]">
                    United States Privacy Rights
                  </button>

                  <button onClick={() => scrollToview("updates")} className="block w-full text-left text-sm whitespace-nowrap text-white/55 transition hover:text-[#009EFF]">
                    Updates to This Notice
                  </button>

                  <button onClick={() => scrollToview("contact")} className="block w-full text-left text-sm whitespace-nowrap text-white/55 transition hover:text-[#009EFF]">
                    Contact Us
                  </button>
                </nav>
              </div>
            </aside>
            <article className="max-w-[820px]">
              <div className="mb-14">
                <p className="text-[15px] leading-[1.8] text-white/65 sm:text-[16px]">This Privacy Notice for Dignifyd Tech Pvt Ltd. ("we," "us," or "our") describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:</p>
              </div>
              <section id="information" className="mb-14 scroll-mt-24">
                <SectionNumber number="01" />

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">What Information Do We Collect?</h2>

                <div className="mt-5 space-y-4 text-[15px] leading-[1.8] text-white/65 sm:text-[16px]">
                  <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.</p>

                  <p>This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
                </div>
              </section>
              <section id="processing" className="mb-14 scroll-mt-24">
                <SectionNumber number="02" />

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">How Do We Process Your Information?</h2>

                <div className="mt-5 space-y-4 text-[15px] leading-[1.8] text-white/65 sm:text-[16px]">
                  <p>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information for the following purposes listed below. We may also process your information for other purposes only with your prior explicit consent.</p>

                  <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>

                  <p>To request feedback. To send you marketing and promotional communications. To deliver targeted advertising to you. To determine the effectiveness of our marketing and promotional campaigns. To save or protect an individual's vital interest.</p>
                </div>
              </section>
              <section id="legal-basis" className="mb-14 scroll-mt-24">
                <SectionNumber number="03" />

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">What Legal Bases Do We Rely On To Process Your Information?</h2>

                <div className="mt-5 space-y-5 text-[15px] leading-[1.8] text-white/65 sm:text-[16px]">
                  <p>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</p>

                  <p>If you are located in the EU or UK, this section applies to you.</p>

                  <p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>

                  <p>If you are located in Canada, this section applies to you. We may process your information if you have given us specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent).</p>
                </div>
              </section>
              <section id="sharing" className="mb-14 scroll-mt-24">
                <SectionNumber number="04" />

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">When and With Whom Do We Share Your Personal Information?</h2>

                <div className="mt-5 space-y-5 text-[15px] leading-[1.8] text-white/65 sm:text-[16px]">
                  <p>We may share information in specific situations described in this section and/or with the following third parties.</p>

                  <p>We may need to share your personal information in the following situations:</p>

                  <ul className="space-y-3 pl-5">
                    <li className="relative">
                      <span className="absolute -left-5 text-[#009EFF]">•</span>
                      <span className="font-medium text-white">Business Transfers.</span> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                    </li>
                  </ul>
                </div>
              </section>
              <section id="cookies" className="mb-14 scroll-mt-24">
                <SectionNumber number="05" />

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Do We Use Cookies and Other Tracking Technologies?</h2>

                <div className="mt-5 space-y-5 text-[15px] leading-[1.8] text-white/65 sm:text-[16px]">
                  <p>We may use cookies and other tracking technologies to collect and store your information.</p>

                  <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>

                  <p>We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements or to tailor advertisements to your interests. The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</p>
                </div>
              </section>
              <section id="retention" className="mb-14 scroll-mt-24">
                <SectionNumber number="06" />

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">How Long Do We Keep Your Information?</h2>

                <div className="mt-5 space-y-5 text-[15px] leading-[1.8] text-white/65 sm:text-[16px]">
                  <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>

                  <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely</p>
                </div>
              </section>
              <section id="security" className="mb-14 scroll-mt-24">
                <SectionNumber number="07" />

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">How Do We Keep Your Information Safe?</h2>

                <div className="mt-5 text-[15px] leading-[1.8] text-white/65 sm:text-[16px]">
                  <p>We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</p>

                  <p className="mt-5">Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
                </div>
              </section>
              <section id="minors" className="mb-14 scroll-mt-24">
                <SectionNumber number="08" />

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Do We Collect Information From Minors?</h2>

                <div className="mt-5 text-[15px] leading-[1.8] text-white/65 sm:text-[16px]">
                  <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the Services.</p>

                  <p className="mt-5">If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records.</p>

                  <p className="mt-5">
                    If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at{" "}
                    <button onClick={() => scrollToview("information")} href="mailto:info@dignifyd.io" className="text-[#009EFF] transition-colors hover:text-white">
                      info@dignifyd.io
                    </button>
                    .
                  </p>
                </div>
              </section>
              <section id="privacy-rights" className="mb-14 scroll-mt-24">
                <SectionNumber number="09" />

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">What Are Your Privacy Rights?</h2>

                <div className="mt-5 text-[15px] leading-[1.8] text-white/65 sm:text-[16px]">
                  <p>In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making.</p>

                  <p className="mt-5">If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review.</p>

                  <p className="mt-5">In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section &quot;How Can You Contact Us About This Notice?&quot;</p>
                </div>
              </section>
              <section id="do-not-track" className="mb-14 scroll-mt-24">
                <SectionNumber number="10" />

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Controls for Do-Not-Track Features</h2>

                <div className="mt-5 text-[15px] leading-[1.8] text-white/65 sm:text-[16px]">
                  <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised.</p>

                  <p className="mt-5">As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.</p>

                  <p className="mt-5">If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
                </div>
              </section>
              <section id="us-privacy-rights" className="mb-14 scroll-mt-24">
                <SectionNumber number="11" />

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Do United States Residents Have Specific Privacy Rights?</h2>

                <div className="mt-5 text-[15px] leading-[1.8] text-white/65 sm:text-[16px]">
                  <p>If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information.</p>

                  <p className="mt-5">You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law.</p>
                </div>
              </section>
              <section id="updates" className="mb-14 scroll-mt-24">
                <SectionNumber number="12" />

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Do We Make Updates to This Notice?</h2>

                <div className="mt-5 text-[15px] leading-[1.8] text-white/65 sm:text-[16px]">
                  <p>Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>

                  <p className="mt-5">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date at the top of this Privacy Notice.</p>

                  <p className="mt-5">If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification.</p>

                  <p className="mt-5">We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>
                </div>
              </section>
              <section id="contact" className="mb-14 scroll-mt-24">
                <SectionNumber number="13" />

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">How Can You Contact Us About This Notice?</h2>

                <div className="mt-5 text-[15px] leading-[1.8] text-white/65 sm:text-[16px]">
                  <p>
                    If you have questions or comments about this notice, you may email us at{" "}
                    <button onClick={() => scrollToview("information")} href="mailto:info@dignifyd.io" className="text-[#009EFF] transition-colors hover:text-white">
                      info@dignifyd.io
                    </button>{" "}
                    or contact us by post at:
                  </p>

                  <div className="mt-5 rounded-xl border border-white/10 bg-[#07182A] p-5 sm:p-6">
                    <p className="font-medium text-white">Dignifyd Tech Pvt Ltd.</p>

                    <p className="mt-2 text-white/60">
                      C-64, Dignifyd, Upper Ground,
                      <br />
                      Noida Sec 2, Uttar Pradesh 201301,
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionNumber({ number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold tracking-wider text-[#009EFF]">{number}</span>

      <span className="h-px w-10 bg-[#009EFF]/40" />
    </div>
  );
}
