import { Button } from '@/components/ui/button';
import { Droplet, Shield, Sparkles, Truck } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <div className="relative min-h-250 w-full overflow-hidden">
        {/* Background Image */}
        <Image
          fill
          src="/makemask.jpg"
          alt="Skincare masks"
          className="absolute inset-0 object-cover translate-y-20 "
        />

        <div className="absolute inset-0 bg-white/40 translate-y-20"></div>

        {/* Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-7xl font-bold drop-shadow-lg">
            Discover Your Perfect Mask
          </h1>

          <p className="mt-4 text-3xl font-semibold drop-shadow-lg p-6">
            Choose your mask Please click
          </p>

          <Button
            size={'lg'}
            variant={'outline'}
            className="text-xl font-semibold text-pink-500 bg-white px-2 py-2"
          >
            Shop now
          </Button>
        </div>
      </div>

      <div>
        <div className="bg-blue-50 h-130">
          <div className="text-black flex justify-center items-center font-bold text-5xl p-15">
            Why Choose Us
          </div>

          <div className="grid md:grid-cols-4 gap-20 px-150">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Premium mask
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Protect your skin
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center mb-6">
                <Droplet className="w-8 h-8 text-white " />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Add moisture to the skin
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Fast delivery
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white h-180">
          <div className="text-black flex justify-center items-center font-bold text-5xl p-15">
            Must Be Known Your Type Skin
          </div>
          <div className="grid md:grid-cols-5 gap-10 px-90">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-pink-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Dry skin
              </h3>
              <h4 className="text-gray-500 text-xl">
                The pores are small and fine. The skin often feels tight and dry
                and may become flaky, especially after washing the face. It may
                also feel itchy, irritated, or red. Common problems include lack
                of moisture, premature wrinkles, and sensitive skin.
              </h4>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Oily skin
              </h3>
              <h4 className="text-gray-500 text-xl">
                The face appears shiny or greasy, especially in the T-zone
                (forehead, nose, and chin). Common problems include clogged
                pores, blackheads, and enlarged pores.
              </h4>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Combination skin
              </h3>
              <h4 className="text-gray-500 text-xl">
                This skin type has both dry areas (U-zone: around the eyes,
                cheeks, and chin) and oily areas (T-zone). Enlarged pores and
                acne are common. The main issues are imbalance of moisture and
                acne in the T-zone.
              </h4>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Sensitive skin
              </h3>
              <h4 className="text-gray-500 text-xl">
                The skin is delicate and reacts easily to chemicals, pollution,
                and sunlight. It tends to develop redness, itching, rashes, or a
                burning sensation. Common problems include irritation, allergic
                rashes, and inflammatory acne.
              </h4>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Normal skin
              </h3>
              <h4 className="text-gray-500 text-xl">
                The skin is well-balanced, neither too dry nor too oily. It
                appears smooth, clear, and healthy with small pores and
                generally has few skin problems.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
