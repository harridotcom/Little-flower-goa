import { describe, expect, it } from "vitest";

import { school } from "@/content/school";

describe("school homepage details", () => {
  it("uses the supplied school name, location and motto", () => {
    expect(school.name).toBe("Little Flower of Jesus High School");
    expect(school.location).toBe("Calangute, Goa, India");
    expect(school.motto).toBe("Duty First");
  });

  it("uses the school's confirmed contact details", () => {
    expect(school.contact.phone).toBe("+91 77984 11767");
    expect(school.contact.email).toBe("lfjhs@rediffmail.com");
  });

  it("names the Principal", () => {
    expect(school.principal.signOff).toContain("Sister Ernestine Fern");
  });
});