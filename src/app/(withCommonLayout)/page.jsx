import HeroSlider from "@/components/HeroSlider";
import Container from "@/components/shared/Container";
import Image from "next/image";

export const metadata = {
  title: "Trust Care | Trusted Care Services",
  description: "Reliable baby sitting and elderly care service platform",
};

export default function HomePage() {
  return (
    <main className="w-full">
      {/* ================= HERO / BANNER ================= */}
      <HeroSlider></HeroSlider>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className=" px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                About Trust Care
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Trust Care is a trusted caregiving platform designed to make
                babysitting, elderly care, and home nursing easy, safe, and
                accessible for everyone. We connect families with verified and
                experienced caretakers.
              </p>
            </div>
            <div className="flex justify-end">
              <img
                src={
                  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                }
                alt="Care Service"
                width={500}
                height={400}
                className="rounded-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ================= SERVICES OVERVIEW ================= */}
      <section className="py-16">
        <Container>
          <div className=" px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Care Services
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Baby Care */}
              <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Baby Care</h3>
                <p className="text-gray-300 mb-4">
                  Professional babysitters to care for your children with love
                  and safety.
                </p>
                <button className="text-blue-600 font-semibold">
                  View Details →
                </button>
              </div>

              {/* Elderly Care */}
              <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Elderly Care</h3>
                <p className="text-gray-300 mb-4">
                  Compassionate caregivers for elderly family members at home.
                </p>
                <button className="text-blue-600 font-semibold">
                  View Details →
                </button>
              </div>

              {/* Sick Care */}
              <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Sick People Care</h3>
                <p className="text-gray-300 mb-4">
                  Special care services for patients and people with special
                  needs.
                </p>
                <button className="text-blue-600 font-semibold">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= TESTIMONIALS / METRICS ================= */}
      <section className="py-16 bg-gray-50 text-black">
        <Container>
          <div className=" px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Trusted by Families
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-4xl font-bold text-blue-600">500+</h3>
                <p className="text-gray-600 mt-2">Happy Families</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-4xl font-bold text-blue-600">300+</h3>
                <p className="text-gray-600 mt-2">Verified Caregivers</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-4xl font-bold text-blue-600">98%</h3>
                <p className="text-gray-600 mt-2">Positive Feedback</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
