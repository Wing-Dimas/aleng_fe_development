import { IconStarFilled } from "@tabler/icons-react"
import Text from "@components/atomics/Text"
import { Fragment } from "react"

export default function RatingSlider({ percentages, stars }) {
  return (
    <div
      className="grid gap-x-2 items-center"
      style={{ gridTemplateColumns: "auto 1fr auto" }}
    >
      {stars.map((rating, i) => {
        return (
          <Fragment key={i}>
            <div className="flex items-center gap-1">
              <IconStarFilled className="w-4 h-4 text-yellow-400" />
              <Text className="!text-sm">{i + 1}</Text>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-xl">
              <div
                className="h-2 bg-blue-500 rounded-xl"
                style={{ width: percentages[i] }}
              />
            </div>
            <Text className="!text-xs">{rating}</Text>
          </Fragment>
        )
      })}
    </div>
  )
}
