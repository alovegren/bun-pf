// src/components/ContactLink.tsx
import { useState, useEffect } from "react";

const ContactLink = () => {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const parts = ["missy.lovegren", "gmail", "com"];
    setEmail(`${parts[0]}@${parts[1]}.${parts[2]}`);
  }, []);

  if (!email) return null;

  return (
    <a href={`mailto:${email}`}>
      {email}
    </a>
  );
};

export default ContactLink;