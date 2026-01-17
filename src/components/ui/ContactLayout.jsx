import ContactForm from "./ContactForm";

function ContactLayout() {
  return (
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
      <div />
      <div className="sm:p-6">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactLayout;
