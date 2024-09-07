'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LinkedInRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to your LinkedIn profile when the component mounts
    router.push('https://www.linkedin.com/in/pratapsinghsisodiya/');
  }, [router]);

  return (
    <div>
      Redirecting to LinkedIn...
    </div>
  );
}
