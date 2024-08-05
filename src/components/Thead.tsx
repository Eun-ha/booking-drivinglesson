export default function Thead() {
  const theadtext = ["연수날짜", "시작시간", "강사명", "연수시간"];

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
