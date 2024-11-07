import { createClient } from "@/lib/supabase/server";
import { Event } from "@/types/event";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const supabase = await createClient()
	// get address from query params
	const address = searchParams.get('address') as string

	// fetch db 
	const { data, error } = await supabase
		.from('events')
		.select()
		.eq('address', address)
		.returns<Event[]>()

	if (error) return NextResponse.json({ success: false, message: error.message }, { status: 500 })

	return NextResponse.json({
		success: true,
		data
	})
}
