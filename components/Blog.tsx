import styles from './Sections.module.css';

export default function Blog() {
  return (
    <>
      <section className={`container ${styles.blog}`}>
        <h2>News &amp; Blog</h2>
        <div className={styles.posts}>
          {[1, 2, 3].map((n) => (
            <article key={n} className={styles.post}>
             
              <div className={styles.postImgContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`/images/blog${n}.png`} 
                  alt="Blog post cover" 
                  className={styles.blogPhoto} 
                />
              </div>
              <p className={styles.meta}>5 Min Read<i>|</i>Design</p>
              <h4>Design Your Brand: How To Create Style Guide For UI</h4>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.nlWrap}>
        <div className={`container ${styles.nl}`}>
          <div>
            <h3>Join Our Newsletter For Get Updates</h3>
            <p>Sign up to receive updates we think may be interesting</p>
          </div>
          <div className={styles.nlForm}>
            <input type="email" placeholder="Enter Your Email Address" aria-label="Email" />
            <button>Subscribe Now</button>
          </div>
        </div>
      </section>

      <section className={styles.touch} id="contact-us">
        <p>Got A Project? Let’s Talk</p>
        <h2>Get In Touch</h2>
      </section>
    </>
  );
}
