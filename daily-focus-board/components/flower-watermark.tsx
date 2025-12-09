export function FlowerWatermark() {
  // Light pink flower watermark pattern
  // Using a data URI SVG for efficient rendering
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='60' cy='60' r='8' fill='%23FFB6C1'/%3E%3Cellipse cx='60' cy='40' rx='18' ry='25' fill='%23FFB6C1' opacity='0.7'/%3E%3Cellipse cx='60' cy='80' rx='18' ry='25' fill='%23FFB6C1' opacity='0.7'/%3E%3Cellipse cx='40' cy='60' rx='25' ry='18' fill='%23FFB6C1' opacity='0.7'/%3E%3Cellipse cx='80' cy='60' rx='25' ry='18' fill='%23FFB6C1' opacity='0.7'/%3E%3Cellipse cx='45' cy='45' rx='20' ry='22' fill='%23FFB6C1' opacity='0.6' transform='rotate(-45 45 45)'/%3E%3Cellipse cx='75' cy='45' rx='20' ry='22' fill='%23FFB6C1' opacity='0.6' transform='rotate(45 75 45)'/%3E%3Cellipse cx='45' cy='75' rx='20' ry='22' fill='%23FFB6C1' opacity='0.6' transform='rotate(45 45 75)'/%3E%3Cellipse cx='75' cy='75' rx='20' ry='22' fill='%23FFB6C1' opacity='0.6' transform='rotate(-45 75 75)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          opacity: 0.15,
        }}
      />
    </div>
  )
}
