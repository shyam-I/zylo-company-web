import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { fullName, email, phone, company, serviceNeeded, budget, timeline, description } = body

    // Validation
    if (!fullName || !email || !phone || !serviceNeeded || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Connect to MongoDB and insert lead
    const { db } = await connectToDatabase()
    const result = await db.collection('leads').insertOne({
      fullName,
      email,
      phone,
      company: company || null,
      serviceNeeded,
      budget: budget || null,
      timeline: timeline || null,
      description,
      createdAt: new Date(),
    })

    if (!result.insertedId) {
      return NextResponse.json(
        { error: 'Failed to submit lead' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, data: { _id: result.insertedId } },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
