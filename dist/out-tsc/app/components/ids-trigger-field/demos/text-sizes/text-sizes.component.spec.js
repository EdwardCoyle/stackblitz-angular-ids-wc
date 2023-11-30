import { TestBed } from '@angular/core/testing';
import { TextSizesComponent } from './text-sizes.component';
describe('TextSizesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TextSizesComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(TextSizesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=text-sizes.component.spec.js.map