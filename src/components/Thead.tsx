import { theadtext } from "@/data/data";

export default function Thead() {
  return (
    <thead className="bg-indigo-500/15 border-b border-indigo-500/15">
      <tr>
        {theadtext.map((text, index) => (
          <th key={index} scope="col" className="py-3">
            {text}
          </th>
        ))}
      </tr>
    </thead>
  );
}
