import { useParams } from "react-router-dom";

const sampleData = {
  movies: [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "The Dark Knight", year: 2008 },
  ],
  anime: [
    { id: 1, title: "Attack on Titan", year: 2013 },
    { id: 2, title: "Demon Slayer", year: 2019 },
  ],
  games: [
    { id: 1, title: "The Witcher 3", year: 2015 },
    { id: 2, title: "Elden Ring", year: 2022 },
  ],
  songs: [
    { id: 1, title: "Bohemian Rhapsody", artist: "Queen" },
    { id: 2, title: "Shape of You", artist: "Ed Sheeran" },
  ],
  books: [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
  ],
  tvshows: [
    { id: 1, title: "Breaking Bad", year: 2008 },
    { id: 2, title: "Stranger Things", year: 2016 },
  ],
};

export default function MediaCategoryPage() {
  const { mediaType } = useParams<{ mediaType: string }>();
  const data =
    sampleData[mediaType?.toLowerCase() as keyof typeof sampleData] || [];

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-semibold mb-6 capitalize">
        {mediaType?.replace(/tvshows/i, "TV Shows") || "Category"}
      </h2>

      {data.length === 0 ? (
        <p className="text-gray-600">No items found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item: any) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              {item.year && <p className="text-gray-600 dark:text-gray-300">Year: {item.year}</p>}
              {item.artist && (
                <p className="text-gray-600 dark:text-gray-300">Artist: {item.artist}</p>
              )}
              {item.author && (
                <p className="text-gray-600 dark:text-gray-300">Author: {item.author}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
