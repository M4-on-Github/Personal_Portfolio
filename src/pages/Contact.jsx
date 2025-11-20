
const Contact = () => {
  const sectionStyle = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    boxSizing: 'border-box',
  };

  const formStyle = {
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const controlStyle = {
    padding: '0.75rem',
    fontSize: '1rem',
    boxSizing: 'border-box',
  };

  return (
    <section className="page contact" style={sectionStyle}>
      <div style={{ width: '100%' }}>
        <h2>Get in Touch</h2>
        <form style={formStyle}>
          <input type="email" placeholder="Your Email" style={controlStyle} />
          <textarea placeholder="Message" rows="4" style={{ ...controlStyle, resize: 'vertical' }} />
          <button type="submit" style={{ ...controlStyle, cursor: 'pointer' }}>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;