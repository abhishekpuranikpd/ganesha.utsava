'use client'

import { useState, useMemo } from 'react'

const PAGE_SIZE = 10

const DevoteesTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filterSerial, setFilterSerial] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  // Filter data based on search + serial
  const filtered = useMemo(() => {
    let filteredData = [...data]

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      filteredData = filteredData.filter(
        (devotee) =>
          devotee.fullName.toLowerCase().includes(term) ||
          devotee.mobile.toLowerCase().includes(term) ||
          devotee.address.toLowerCase().includes(term)
      )
    }

    if (filterSerial) {
      const serial = parseInt(filterSerial)
      if (!isNaN(serial)) {
        filteredData = filteredData.filter((_, i) => i + 1 === serial)
      }
    }

    return filteredData
  }, [data, searchTerm, filterSerial])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const pageData = filtered.slice(startIndex, startIndex + PAGE_SIZE)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Devotee List</h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search name, mobile, address"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentPage(1)
          }}
          className="w-full sm:w-1/2 border border-gray-300 rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-2 items-center">
          <input
            type="number"
            placeholder="Serial No."
            value={filterSerial}
            onChange={(e) => {
              setFilterSerial(e.target.value)
              setCurrentPage(1)
            }}
            className="border border-gray-300 rounded px-3 py-2 w-32 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => {
              setFilterSerial('')
              setSearchTerm('')
              setCurrentPage(1)
            }}
            className="bg-blue-100 hover:bg-blue-200 text-blue-700 rounded px-4 py-2 transition"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Responsive Layout: Table on md+, Cards on mobile */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border-collapse border rounded text-sm">
          <thead>
            <tr className="bg-blue-50 text-left">
              <th className="border px-3 py-2">S.No</th>
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Mobile</th>
              <th className="border px-3 py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {pageData.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center p-4">
                  No devotees found.
                </td>
              </tr>
            ) : (
              pageData.map((devotee, index) => (
                <tr key={devotee.id} className="hover:bg-gray-50">
                  <td className="border px-3 py-2">{startIndex + index + 1}</td>
                  <td className="border px-3 py-2">{devotee.fullName}</td>
                  <td className="border px-3 py-2">{devotee.mobile}</td>
                  <td className="border px-3 py-2">{devotee.address}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {pageData.length === 0 ? (
          <div className="text-center text-gray-600">No devotees found.</div>
        ) : (
          pageData.map((devotee, index) => (
            <div key={devotee.id} className="border rounded-lg p-4 shadow-sm bg-white">
              <div className="font-semibold text-gray-700 mb-2">
                #{startIndex + index + 1} - {devotee.fullName}
              </div>
              <div className="text-sm text-gray-600">
                <p><strong>Mobile:</strong> {devotee.mobile}</p>
                <p><strong>Address:</strong> {devotee.address}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-gray-600">
          Page {totalPages === 0 ? 0 : currentPage} of {totalPages}
        </div>
        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="border rounded px-4 py-2 bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            Prev
          </button>
          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="border rounded px-4 py-2 bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default DevoteesTable
