import Icon2 from "@/shared/assets/images/interise-group/graph-up.svg"
import IconFinance from "@/shared/assets/images/interise-group/icon-finance.svg"
import IconInvestments from "@/shared/assets/images/interise-group/icon-investments.svg"
import IconMedicina from "@/shared/assets/images/interise-group/icon-medicina.svg"

export const getCaseIndustryIcons = (industry?: string) => {
  if (!industry) return null

  switch (industry) {
    case "Финтех":
    case "Fintech":
      return <IconFinance />

    case "Инвестиции":
    case "Investments":
      return <IconInvestments />

    case "Медицина":
    case "Healthcare":
      return <IconMedicina />

    case "Авиация":
    case "Aviation":
      return <Icon2 />

    default:
      return null
  }
}
