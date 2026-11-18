import Link from "next/link";

const mockUrls = ["https://18agbfpk6v.ufs.sh/f/pG1cedUO4CvXmlwqwYeBHe1sImPaNufS7MzZlojCnOxJ48cD", "https://18agbfpk6v.ufs.sh/f/pG1cedUO4CvXPqKGFduEf20cT3r9hsvaCdIeXunyJVWiNUMk", "https://18agbfpk6v.ufs.sh/f/pG1cedUO4CvXZLl0rpF7N2RibJ8WHT3sMFykOrLfjazKI4qx"]
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));



export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        
    <table className="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
  <thead>
    <tr>
      <th className="border border-gray-300 dark:border-gray-600">Bingus</th>
      <th className="border border-gray-300 dark:border-gray-600">buritto</th>
      <th className="border border-gray-300 dark:border-gray-600">Giant river otter</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-300 dark:border-gray-700">1</td>
      <td className="border border-gray-300 dark:border-gray-700">2</td>
    </tr>
    <tr>
      <td className="border border-gray-300 dark:border-gray-700">3</td>
      <td className="border border-gray-300 dark:border-gray-700">4</td>
    </tr>
    <tr>
      <td className="border border-gray-300 dark:border-gray-700">5</td>
      <td className="border border-gray-300 dark:border-gray-700">6</td>
    </tr>
    <tr>
      <td className="border border-gray-300 dark:border-gray-700"></td>
      <td className="border border-gray-300 dark:border-gray-700">3</td>

    </tr>
  </tbody>
</table>
  <p className="underline hover:decoration-pink-500">
            I heart bingus</p>
  <p className="overflow-hidden text-clip">It was the best of times, it was the worst of times, it was the age of
wisdom, it was the age of foolishness, it was the epoch of belief, it was
the epoch of incredulity, it was the season of Light, it was the season of
Darkness, it was the spring of hope, it was the winter of despair, we had
everything before us, we had nothing before us, we were all going direct
to Heaven, we were all going direct the other way—in short, the period
was so far like the present period, that some of its noisiest authorities
insisted on its being received, for good or for evil, in the superlative
degree of comparison only. There were a king with a large jaw and a queen with a plain face, on
the throne of England; there were a king with a large jaw and a queen
with a fair face, on the throne of France. In both countries it was clearer
than crystal to the lords of the State preserves of loaves and fishes, that
things in general were settled for ever.
It was the year of Our Lord one thousand seven hundred and
seventy-five. Spiritual revelations were conceded to England at that
favoured period, as at this. Mrs. Southcott had recently attained her
five-and-twentieth blessed birthday, of whom a prophetic private in
the Life Guards had heralded the sublime appearance by announcing
that arrangements were made for the swallowing up of London and
Westminster. Even the Cock-lane ghost had been laid only a round
dozen of years, after rapping out its messages, as the spirits of this very
year last past (supernaturally deficient in originality) rapped out theirs.

Mere messages in the earthly order of events had lately come to the En-
glish Crown and People, from a congress of British subjects in America:

which, strange to relate, have proved more important to the human race
than any communications yet received through any of the chickens of
the Cock-lane brood.
France, less favoured on the whole as to matters spiritual than her
sister of the shield and trident, rolled with exceeding smoothness down
hill, making paper money and spending it. Under the guidance of her
Christian pastors, she entertained herself, besides, with such humane
achievements as sentencing a youth to have his hands cut off, his tongue
torn out with pincers, and his body burned alive, because he had not
kneeled down in the rain to do honour to a dirty procession of monks</p>









        
        <div className="flex flex-wrap gap-4">
        
        
          {
      mockImages.map((image) => (
        <div key ={image.id} className="w-48">
          <img className="skew-12 scale-120 rounded-xl" src={image.url} alt="image" />
        </div>
      ))
    }
    </div>

      
    </main>
  );
}

