import { theadtext } from "@/data/data";

export default function Thead() {
  return (
    <thead>
      <tr>
        {theadtext.map((text, index) => (
          <th key={index} scope="col">
            {text}
          </th>
        ))}
      </tr>
    </thead>
  );
}
